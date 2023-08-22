//import { Link } from 'react-router-dom'
import '../AboutContent.css'
import AboutData from './AboutData'
import AboutBtn from './AboutBtn' // Adjust the import path
import WhoAmI from './WhoAmI'
import { useState, useEffect, useRef } from 'react'

const AboutContent = () => {
  const [activeContent, setActiveContent] = useState(null)
  const dropdownRef = useRef(null)

  const handleDropdownClick = data => {
    if (activeContent && activeContent.id === data.id) {
      setActiveContent(null) // Close the dropdown if it's already open
    } else {
      setActiveContent(data)
    }
    setTimeout(() => {
      const dropdownContent = document.getElementById(`dropdown-menu-${data.id}`)
      if (dropdownContent) {
        dropdownContent.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Adjust the delay as needed
  }

  useEffect(() => {
    const handleDocumentClick = event => {
      if (activeContent && event.target.closest(`#dropdown-menu-${activeContent.id}`)) {
        setActiveContent(null) // Close the dropdown if the click is inside the dropdown content
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [activeContent])

  return (
    <div className='about'>
      <div className='intro'>
        <h2>Who am I?</h2>

        <WhoAmI />
      </div>

      <div className='testin2' ref={dropdownRef}>
        {AboutData.map(data => (
          <div className='dropdown-center' key={data.id}>
            <a
              className='btn btn-secondary dropdown-toggle'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              data-bs-display='static'
              aria-expanded='false'
              onClick={() => handleDropdownClick(data)}
            >
              {data.category}
            </a>
            {activeContent && activeContent.id === data.id && (
              <div id={`dropdown-menu-${data.id}`} className='dropdown-menu'>
                <li>
                  <div className='close'></div>
                  <button onClick={() => setActiveContent(null)}>Close</button>
                  <AboutBtn category={data.category} content={data} />
                </li>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutContent
