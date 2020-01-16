import React from 'react'
import email from '../icons/email.png'
import github from '../icons/github.png'
import linkedin from '../icons/LI.png'
import resumeIcon from '../icons/resume.png'
import resume from '../images/KristaLovenResume.pdf'
import { Image } from 'semantic-ui-react'

const Contact = () => {
  const size = { width: 57, height: 57 }
  return (
    <div className='contact'>
      <a href='https://www.linkedin.com/in/krista-loven/' target='blank'>
        <Image src={linkedin} alt='LinkedIn Logo' className='ui spaced image' style={size} />
      </a>
      <a href='https://github.com/kel29' target='blank'>
        <Image src={github} alt='Github Logo' className='ui spaced image' style={size} />
      </a>
      <a href='mailto: krista.loven.87@gmail.com'>
        <Image src={email} alt='email' className='ui spaced image' style={size} />
      </a>
      <a href={resume} target='blank'>
        <Image src={resumeIcon} alt='resume' className='ui spaced image' style={size} />
      </a>
    </div>
  )
}

export default Contact
