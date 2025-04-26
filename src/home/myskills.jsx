import React, { useEffect, useRef } from 'react'
import reactImg from './../assets/images/react.png'
import javaScriptImg from './../assets/images/javascript.png'
import cssImg from './../assets/images/css.png'
import bootsrapImg from './../assets/images/bootsrap.png'
import tailwindImg from './../assets/images/tailwind.png'
import nodeImg from './../assets/images/icons8-node-js-150.png'
import htmlImg from './../assets/images/icons8-html.svg'
import gitImg from './../assets/images/icons8-git.svg'
import expressImg from './../assets/images/icons8-express-vpn.svg'

export default function Myskills() {

const elementsRef = useRef([])

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    elementsRef.current.forEach((el) => observer.observe(el))
    console.log(elementsRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className='myskills' id='myskills'>
      <h4></h4>

      <div className="frontend">
        <div className="head">
          <div className='tech'>
            <h3>TechStack</h3>
          </div>
          
          <div>Technologies i'm <br/><span>proficient</span><br/> working with</div>
        </div>

        <div className="skills">
          <div className="logo hide" ref={(el) => elementsRef.current[0] = el}>
            <img src={reactImg} alt="" />
            <p>ReAct</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[1] = el}>
            <img src={javaScriptImg} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[2] = el}>
            <img src={cssImg} alt="" />
            <p>CSS</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[3] = el}>
            <img src={bootsrapImg} alt="" />
            <p>BootStrap</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[4] = el}>
            <img src={tailwindImg} alt="" />
            <p>Tailwind</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[5] = el}>
            <img src={nodeImg} alt="" />
            <p>Node Js</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[6] = el}>
            <img src={htmlImg} alt="" />
            <p>Html</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[7] = el}>
            <img src={gitImg} alt="" />
            <p>Git</p>
          </div>
          <div className="logo hide" ref={(el) => elementsRef.current[8] = el}>
            <img src={expressImg} alt="" />
            <p>Express</p>
          </div>
        </div>
      </div>
    </div>
  )
}
