import '../Footer.css'
import { useEffect, useState } from 'react'

import { FaHome, FaReact, FaNodeJs, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoMongodb, BiLogoJavascript } from 'react-icons/bi'
import { SiVite } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
const Footer = () => {
  const [isFooterVisible, setFooterVisibility] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const threshold = 10

      if (documentHeight - scrollTop <= windowHeight + threshold) {
        setFooterVisibility(true)
      } else {
        setFooterVisibility(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={`footer ${isFooterVisible ? 'visible' : ''}`}>
      <div className='home'>
        <FaHome />
        <div className='local'>Porto, Portugal</div>
      </div>
      <div className='sk'>
        <BsGit style={{ fill: 'orange', margin: '5px', width: '15px', height: '15px' }} />
        <FaReact style={{ fill: 'aqua', margin: '5px', width: '15px', height: '15px' }} />
        <BiLogoMongodb style={{ fill: 'green', margin: '5px', width: '15px', height: '15px' }} />
        <AiFillHtml5 style={{ fill: 'orange', margin: '5px', width: '15px', height: '15px' }} />
        <FaNodeJs style={{ fill: 'olive', margin: '5px', width: '15px', height: '15px' }} />
        <BiLogoJavascript
          style={{ fill: 'yellow', margin: '5px', width: '15px', height: '15px' }}
        />
        <FaCss3Alt style={{ fill: 'blue', margin: '5px', width: '15px', height: '15px' }} />
        <SiVite style={{ fill: 'yellow', margin: '5px', width: '15px', height: '15px' }} />
        <FaBootstrap style={{ fill: 'purple', width: '15px', height: '15px' }} />
      </div>
    </div>
  )
}

export default Footer
