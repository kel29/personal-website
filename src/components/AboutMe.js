import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import headshot from '../images/KL.jpg'
import '../App.css'

const AboutMe = () => {
  return (
    <div className='content about'>
      <Container>
        <Grid stackable verticalAlign='middle'>
          <Grid.Column width={3}>
            <Image src={headshot} alt='profile photo' className='ui medium circular centered image' />
          </Grid.Column>
          <Grid.Column width={13}>
            <h1 className='head-text'>Hello, I'm Krista Loven.</h1>
          </Grid.Column>
        </Grid>
        <p className='about-me'>
          I'm an impact-driven professional, passionate about driving positive 
          change to my organization and the world. As a fullstack software 
          engineer, I am JavaScript and Ruby focused, with an aptitude for 
          learning new technologies. Have a problem you're working 
          on? <a href='https://www.linkedin.com/in/krista-loven/' target='blank'>Connect with me</a>
          , I'd love to help you solve it.
        </p>
        <p className='about-me'>
          Previously, I helped veterans figure out what to do in their post-military
          career through American Corporate Partners, I planned public events for
          Brooklyn Bridge Park Conservancy, and I started my career building a youth
          camp at a horse barn. I'm adventurous, experimental, and curious to find
          new solutions for old problems. I hold a Bachelor's degree from NYU, and
          am conversational in Spanish.
        </p>
      </Container>
    </div>
  )
}

export default AboutMe
