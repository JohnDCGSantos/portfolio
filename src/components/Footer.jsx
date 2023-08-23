import '../Footer.css'
import { useEffect, useState } from 'react'

import { FaHome, FaReact, FaNodeJs, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoMongodb } from 'react-icons/bi'
import { TbBrandJavascript } from 'react-icons/tb'
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
        {' '}
        <FaHome /> Porto, Portugal
      </div>
      <div className='sk'>
        <BsGit style={{ fill: 'orange', margin: '5px' }} />
        <FaReact style={{ fill: 'aqua', margin: '5px' }} />
        <BiLogoMongodb style={{ fill: 'green', margin: '5px' }} />
        <AiFillHtml5 style={{ fill: 'orange', margin: '5px' }} />
        <FaNodeJs style={{ fill: 'olive', margin: '5px' }} />
        <TbBrandJavascript style={{ fill: 'yellow', margin: '5px' }} />
        <FaCss3Alt style={{ fill: 'blue', margin: '5px' }} />
        <SiVite style={{ fill: 'yellow', margin: '5px' }} />
        <FaBootstrap style={{ fill: 'purple' }} />
      </div>
    </div>
  )
}

export default Footer
