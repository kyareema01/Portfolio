import React from 'react'
import Hero from './hero'
import Aboutme from './about-me'
import RecentWorks from './recent-works'
import ContactMe from './contact-me'
import Header from '../../comps/header/header'
import Footer from '../../comps/footer/footer'
import Myskills from './myskills'

export default function Home() {
  return (
    <>
    <Header name={'KhalifaYareema'} />

      {/* <Hero /> */}
      <RecentWorks />
      <Aboutme />
      <Myskills />
      <ContactMe />

      <Footer />
    </>
  )
}
