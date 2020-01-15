import React from 'react'
import email from '../icons/email.png'
import github from '../icons/github.png'
import linkedin from '../icons/LI.png'
import resumeIcon from '../icons/resume.png'
import resume from '../images/KristaLovenResume.pdf'

const Contact = () => {
  return (
    <div className='contact'>
      <a href='https://www.linkedin.com/in/krista-loven/' target='blank'>
        <img src={linkedin} alt='LinkedIn Logo' className='ui mini spaced image' />
      </a>
      <a href='https://github.com/kel29' target='blank'>
        <img src={github} alt='Github Logo' className='ui mini spaced image' />
      </a>
      <a href='mailto: krista.loven.87@gmail.com'>
        <img src={email} alt='email' className='ui mini spaced image' />
      </a>
      <a href={resume} target='blank'>
        <img src={resumeIcon} alt='resume' className='ui mini spaced image' />
      </a>
    </div>
  )
}

export default Contact
