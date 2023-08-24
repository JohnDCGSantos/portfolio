import back from '../tina-dawson-Kim9COAIEGc-unsplash.jpg'
import HomeBtns from './HomeBtns'
import '../MainSection.css'
import '../NavBar.css'

const MainSection = () => {
  return (
    <div className='mainSect'>
      <div className='mask'>
        <img className='intrImg' src={back} alt='introImg' />
      </div>

      <div className='content'>
        <h1>João Santos</h1>

        <p>Junior Full Stack Web Developer (MERN)</p>

        <HomeBtns />
      </div>
    </div>
  )
}

export default MainSection
