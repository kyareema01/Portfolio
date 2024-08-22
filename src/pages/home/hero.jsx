import React from 'react'
import download from './../../assets/images/download.svg'
import doodle from './../../assets/images/doodles mixed round.png'
import heroImg from './../../assets/images/hero-img.png'
import arrow from './../../assets/images/arrowR.svg'
import shadow from './../../assets/images/shadow.png'
import Button from '../../comps/button'
import macbook from './../../assets/images/macbook.svg'
import bulb from './../../assets/images/lightbulb.svg'

function LeftHero() {
  return (
    <div className="left-hero">
      <div className="mac">
      <img src={macbook} alt=".." style={{width: '70px'}}/>
      </div>

      <div className="arrow">
        <img style={{width: '100%'}} src={arrow} alt="" />
      </div>

      <div className='hero-bold'>
        <p>Software Eng.</p>
        <span>FrontEnd-Developer</span>
      </div>

      <div className='btn cont'>
        <Button size={'small'} borderRadius={'25px'}>
          Hire me
        </Button>

        <Button size={'large'} borderRadius={'25px'} hasImg={true} imgSrc={download}>
          Download cv
        </Button>
      </div>
    </div>
  )
}

function RightHero() {
  return (
    <div className="right-hero">
      <div className="doodle">
        <img src={doodle} alt=".." />

        <div className="hero-img">
          <img src={heroImg} alt=".." />

            <div className="shadow">
              <img src={shadow} alt="" />
            </div>
        </div>
      </div>

      <div className="light-bulb">
        <img src={bulb} alt=".." />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div className='hero container'>
      <LeftHero />
      <RightHero />
    </div>
  )
}
