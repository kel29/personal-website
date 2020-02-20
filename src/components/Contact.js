import React from 'react'
import email from '../icons/email.png'
import github from '../icons/github.png'
import linkedin from '../icons/LI.png'
import resumeIcon from '../icons/resume.png'
import resume from '../images/KristaLovenResume.pdf'
import { Container, Image, Grid } from 'semantic-ui-react'

const Contact = () => {
  return (
    <div className='contact'>
      <Container>
      <h2 className='section-headers inverse'>Get in Contact</h2>
        <Grid centered columns={4}>
          <Grid.Column computer={2} tablet={2} mobile={4}>
            <a href='https://www.linkedin.com/in/krista-loven/' target='blank'>
              <Image src={linkedin} alt='LinkedIn Logo' className='ui image contact-icon' />
            </a>
          </Grid.Column>
          <Grid.Column computer={2} tablet={2} mobile={4}>
            <a href='https://github.com/kel29' target='blank'>
              <Image src={github} alt='Github Logo' className='ui image contact-icon' />
            </a>
          </Grid.Column>
          <Grid.Column computer={2} tablet={2} mobile={4}>
            <a href='mailto: krista.loven.87@gmail.com'>
              <Image src={email} alt='email' className='ui image contact-icon' />
            </a>
          </Grid.Column>
          <Grid.Column computer={2} tablet={2} mobile={4}>
            <a href={resume} target='blank'>
              <Image src={resumeIcon} alt='resume' className='ui image contact-icon' />
            </a>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default Contact
