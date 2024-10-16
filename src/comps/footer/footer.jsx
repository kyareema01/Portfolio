import React from 'react'
import { Link } from 'react-router-dom'
import home from './../../assets/images/home.svg'
import about from './../../assets/images/user.svg'
import contact from './../../assets/images/phone.svg'
import linkedln from './../../assets/images/icons8-linkedin.svg'
import instagram from './../../assets/images/instagram.svg'
import twitter from './../../assets/images/icons8-x.svg'
import gmail from './../../assets/images/icons8-gmail.svg'

export default function Footer() {

  const paths = [
    {name:  'home', img: home, path: '#home'},
    {name:  'about', img: about, path: '#about'},
    {name:  'contact', img: contact, path: '#contact'},
  ]

  return (
    <footer>
      <div className="main-footer">
        <div className="navs">
          {paths.map((path) => (
            <div className="home" id='home'>
              <a href={path.path}>
                <img src={path.img} alt=".." />
                <p>{path.name}</p>
              </a>
           </div>
          ))}
        </div>

        <div className="socials">
          <Link to={'https://www.linkedin.com/in/abubakar-yareema-0788ab2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}>
            <img src={linkedln} alt=".." />
          </Link>
          <Link to={'https://www.instagram.com/sir_jrr?igsh=MWsyY2hhNmVucHhqMg%3D%3D&utm_source=qr'}>
            <img src={instagram} alt=".." />
          </Link>
          <Link to={'https://x.com/kyareema?s=21'}>
            <img src={twitter} alt=".." />
          </Link>
          <img src={gmail} alt=".." />
        </div>

        <div className="footer-text">
          <p>Designed and coded by -Khalifa Yareema!</p>
        </div>
      </div>
    </footer>
  )
}
