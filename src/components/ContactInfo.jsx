import '../ContactInfo.css' // You can create a CSS file for styling
import { BsGithub, BsWhatsapp } from 'react-icons/Bs'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/Ai'

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <div className='tittle'>
        <h2>Contact Me</h2>
      </div>
      <div className='info'>
        <div className='contact-info-left'>
          <p>
            <AiOutlineMail /> <a href='mailto:jdcg@gmail.com'>Email</a>
          </p>
          <p>
            <AiFillLinkedin />
            <a
              href='https://www.linkedin.com/in/joaodcgs'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className='contact-info-right'>
          <p>
            <BsWhatsapp />
            <a href='https://wa.me/351912154577' target='_blank' rel='noopener noreferrer'>
              WhatsApp
            </a>
          </p>
          <p>
            <BsGithub />
            <a href='https://github.com/JohnDCGSantos' target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
