import { Link } from 'react-router-dom'
import '../Btn.css'
const HomeBtns = () => {
  return (
    <div className='btns'>
      <button className='btTop'>
        <Link type='button' className='pulse-btn' to='/about'>
          <h3>About me!</h3>
        </Link>
      </button>
      <button className='btBtm'>
        <Link type='button' className='pulse-btn' to='/projects'>
          <h3>My projects!</h3>
        </Link>
      </button>
    </div>
  )
}

export default HomeBtns
