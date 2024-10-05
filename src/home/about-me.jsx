 import React from 'react'
import bulb from './../assets/images/lightbulb.svg'
import ArrowD from './../assets/images/arrowD.svg'
import doodle from './../assets/images/doodle-items.png'
import aboutMeImg from './../assets/images/About-me.png'
import music from './../assets/images/music.svg'
// import shadow from './../../assets/images/shadow.png'

function LeftAbout() {
  return (
    <div className="left-about">
      <div className="music-container">
        <img src={music} alt=".." />
      </div>
      
      <div className="content">
        <h1><span>Abubakar</span> Usman Yarima</h1>
        <p>ReAct Js | JavaScript | Node Js</p>
        <p>I am an enthusiastic software engineer who recently graduated with a B.Sc in Software engineering from Al-Hikmah university Illorin, currently gaining valuable experience as a Full-stack developer intern at Uniccon group of companies where i'm actively working with a range of technologies including HTML, Css, JavaScript, ReAct and Node Js. From building responsive user interfaces to developing server-side logic, i'm constantly learning and sharpening my skills. I am looking forward to next step in my career where i can contribute to exciting projects, continue developing my skills and make a real impact.</p>
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
      <div className="left-header">
        <h2>About <span>Me</span></h2>
        <img src={bulb} alt=".." />
      </div>

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