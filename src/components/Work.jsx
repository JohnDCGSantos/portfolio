import '../WorkCard.css'
import { Link } from 'react-router-dom'
import WorkCard from './WorkCard'
import WorkCardData from './workCardData'

const Work = () => {
  return (
    <div className='Work-container'>
      <div className='Project-heading'>
        <h1> Welcome to my projects</h1>
      </div>
      <div className='Project-container'>
        {WorkCardData.map(val => (
          <WorkCard
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            link={val.link}
            skills={val.skills}
          />
        ))}
        <div className='clBtn'>
          <Link to='/Contacts' className='btn'>
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Work
