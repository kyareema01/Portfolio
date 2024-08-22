import React from 'react'
import { Link } from 'react-router-dom'
import home from './../../assets/images/home.svg'
import about from './../../assets/images/user.svg'
import contact from './../../assets/images/phone.svg'
import linkedln from './../../assets/images/facebook.svg'
import instagram from './../../assets/images/instagram.svg'
import twitter from './../../assets/images/twitter.svg'
import youtube from './../../assets/images/youtube.svg'

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="navs">
          <div className="home">
            <img src={home} alt=".." />
            <p>Home</p>
          </div>
          <div className="About">
            <img src={about} alt=".." />
            <p>About Me</p>
          </div>
          <div className="Contact">
            <img src={contact} alt=".." />
            <p>Contact</p>
          </div>
        </div>

        <div className="socials">
          <img src={linkedln} alt=".." />
          <Link to={'https://instagram.com/sir_jrr'}><img src={instagram} alt=".." /></Link>
          <img src={twitter} alt=".." />
          <img src={youtube} alt=".." />
        </div>

        <div className="footer-text">
          <p>Designed and coded by -Khalifa Yareema!</p>
        </div>
      </div>
    </footer>
  )
}
