 import React from 'react'
import bulb from './../../assets/images/lightbulb.svg'
import ArrowD from './../../assets/images/arrowD.svg'
import doodle from './../../assets/images/doodle-items.png'
import aboutMeImg from './../../assets/images/About-me.png'
import music from './../../assets/images/music.svg'
// import shadow from './../../assets/images/shadow.png'

function LeftAbout() {
  return (
    <div className="left-about">
      <div className="music-container">
        <img src={music} alt=".." />
      </div>

      <div className="left-header">
        <h2>About <span>Me</span></h2>
        <img src={bulb} alt=".." />
      </div>
      
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab corporis veniam molestiae vel tenetur, debitis error! Tempora quod dignissimos eius facere provident odio, iure natus cupiditate maxime ullam. Corrupti deserunt sunt repudiandae voluptates. Asperiores accusantium sapiente sed veniam hic quod aspernatur aliquam eaque ea? Eos nulla repellendus iste rerum.... <span>Read More</span></p>
      </div>

      <div className="arrowD">
        <img src={ArrowD} alt=".." />
      </div>
    </div>
  )
}

function RightAbout() {
  return (
    <div className="right-about">
      <div className="doddle about-me">
        <img src={doodle} alt=".." />

        <div className="about-me img">
          <img src={aboutMeImg} alt=".." />

            {/* <div className="about-me shadow">
              <img src={shadow} alt=".." />
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className='about-me'>
      <RightAbout />
      <LeftAbout />
    </div>
  )
}