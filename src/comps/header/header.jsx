import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import Button from '../button'

const SideBar = ({
  navs,
  sidebar
}) => {
  return (
    <div className="sidebar" ref={sidebar}>
      {navs.map((nav, index) => (
        index < 3 ? 
        <li key={index} className='sidebar-list'>
          <a href={nav.path}>{nav.name}</a>
        </li> : ''
      ))}

    <div className="sidebar-btn">
      <Button 
        children={'Download CV'}
        borderRadius={'2px'}
        size={'l'}
      />
    </div>
  </div>
  )
}

export default function Header() {

  const sidebar = useRef(null)
  const hamburger = useRef(null)

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

    const handleClose = (e) => {
      if (
        sidebar.current && !sidebar.current.contains(e.target) &&
        hamburger.current && !hamburger.current.contains(e.target)
      ) {
        setOpen(open)
      }
    }

    window.addEventListener('click', handleClose)
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', handleClose);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log()

  const navs = [
    {name: 'About', data: 'About', path: '#about'},
    {name: 'Skills', data: 'Skills', path: '#myskills'},
    {name: 'Contact', data: 'Contact', path: '#contact'},
    {name: 'Dwnl CV', data: 'Dwnl CV', path: ''},
  ]

  const handleClick = () => {
    setOpen(!open)
  }

  return (
  <header>
    <nav>
      <div className={`container-nav ${top}`}>
      <div>
        <a className={`font`} href='#home'>Khalifa Yareema</a>
      </div>

        <div ref={hamburger} onClick={handleClick} className={`hamburg ${open ? 'change' : ''}`}>
          <span className={`bar topp`}></span>
          <span className={`bar center`}></span>
          <span className={`bar bottom`}></span>
        </div>

        {open && (
          <SideBar 
          navs={navs}
          sidebar={sidebar}
          />
        )}

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
    </header>
  )
}
