import { Link } from 'react-router-dom'
import '../Btn.css'
const HomeBtns = () => {
  return (
    <div>
      <button>
        <Link type='button' className='btn' to='/About'>
          <h3>Base class</h3>
        </Link>
      </button>
      <button>
        <Link type='button' className='btn' to='/About'>
          <h3>Base class</h3>
        </Link>
      </button>
    </div>
  )
}

export default HomeBtns
