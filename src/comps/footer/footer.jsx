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
          <img src={linkedln} alt=".." />
          <Link to={'https://instagram.com/sir_jrr'}>
            <img src={instagram} alt=".." />
          </Link>
          <img src={twitter} alt=".." />
          <img src={gmail} alt=".." />
        </div>

        <div className="footer-text">
          <p>Designed and coded by -Khalifa Yareema!</p>
        </div>
      </div>
    </footer>
  )
}
