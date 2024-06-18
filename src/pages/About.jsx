import ImgProject from '../components/ImgProject'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
/*function About() {
  return (
    <div>
      <ImgProject title='About me' description='bla bla bla bla' />

      <AboutContent
        journey='Im a passionate web dev'
        text='Im a passionate web dev'
        why='because'
      />
    </div>
  )
}*/
function About() {
  return (
    <div>
      <ImgProject title='About me' description='' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
