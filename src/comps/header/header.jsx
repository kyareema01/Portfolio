import React from 'react'
import { useEffect, useState } from 'react'

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
  }, []);

  const navs = [
    {name: 'Home', data: 'Home', path: '/Home'},
    {name: 'Portfolio', data: 'Portfolio', path: '/portfolio'},
    {name: 'About', data: 'About', path: '/About-me'},
    {name: 'Contact', data: 'Contact', path: '/Contact'}
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
                <a data-text={page.data} className={`page-links ${active}`} to={page.path}>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
      </div>
     </nav>

      <section>
        <div className="container">
          <div className="intro-text">
            <h1 className="intro-heading">Full-stack<br/><b>Node JS</b> | <b>React JS</b> <br/>developer</h1>
            <button href="#services" className="btn-xl">Contact</button>
          </div>
        </div>
      </section>
    </header>
  )
}
