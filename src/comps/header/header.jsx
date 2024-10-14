import React from 'react'
import { useEffect, useState } from 'react'
import Button from '../button'

export default function Header() {

  const [top, setTop] = useState('')
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        setTop('top');
        setActive('active');
      } else {
        setTop('');
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  const navs = [
    {name: 'Home', data: 'Home', path: '#home'},
    {name: 'About', data: 'About', path: '#about'},
    {name: 'Skills', data: 'Skills', path: '#myskills'},
    {name: 'Contact', data: 'Contact', path: '#contact'}
  ]

  const handleClick = () => {
    setOpen(!open)
  }

  return (
  <header>
    <nav>
      <div className={`container-nav ${top}`}>
      <div>
        <a className={`font`} href="/home">Khalifa Yareema</a>
      </div>

        <div onClick={handleClick} className={`hamburg ${open ? 'change' : ''}`}>
          {navs.map((_, index) => {
            let bar = ''

            if (index === 0) {
              bar = 'topp'
            } else if (index === 1) {
              bar = 'center'
            } else {
              bar = 'bottom'
            }

            return index > 2 ? null : <span key={index} className={`bar ${bar}`}></span>
          })}
        </div>

          <ul className='nav navbar-right'>
            {navs.map((page, index) => (
              <li key={index}>
                <a data-text={page.data} className={`page-links ${active}`} href={page.path}>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
      </div>
     </nav>

      <section>
        <div className="container" id='home'>
          <div className="intro-text">
            <h1 className="intro-heading">Full-stack<br/><b>Node JS</b> | <b>React JS</b> <br/>developer</h1>
          </div>
        </div>
      </section>
      <div className="btn-cont">
        <Button children={'Download CV'} size={'xl'}/>
      </div>
      {/* <button className="btn-xl">Download CV</button> */}
    </header>
  )
}
