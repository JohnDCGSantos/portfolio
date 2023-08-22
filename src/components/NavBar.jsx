import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import '../NavBar.css'
const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(!click)

  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <h1>Portfolio</h1>
        </Link>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/About' onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to='/Projects' onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li>
          <Link to='/contacts' onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  )
}

export default NavBar
