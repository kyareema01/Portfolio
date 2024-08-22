import React from 'react'
import reactImg from './../../assets/images/react.png'
import javaScriptImg from './../../assets/images/javascript.png'
import cssImg from './../../assets/images/css.png'
import bootsrapImg from './../../assets/images/bootsrap.png'
import tailwindImg from './../../assets/images/tailwind.png'
import nodeImg from './../../assets/images/node.png'
import npmImg from './../../assets/images/npm.png'
import expressImg from './../../assets/images/express.png'

export default function Myskills() {
  return (
    <div className='myskills'>
      <h4>Skills</h4>

      <div className="frontend">
        <div className="head">
          <h3>Front-<span>End</span></h3>
        </div>

        <div className="skills">
          <div className="react">
            <img src={reactImg} alt="" />
            <p>ReAct</p>
          </div>
          <div className="js">
            <img src={javaScriptImg} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="css">
            <img src={cssImg} alt="" />
            <p>CSS</p>
          </div>
          <div className="bootsrap">
            <img src={bootsrapImg} alt="" />
            <p>BootStrap</p>
          </div>
          <div className="tailwind">
            <img src={tailwindImg} alt="" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>

      {/* <div className="backend">
        <h3>Back-End</h3>
        
        <div className="skills">
          <h3>Coming Soon.....</h3>
        </div>
      </div> */}
    </div>
  )
}
