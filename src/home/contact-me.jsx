import React, { useState } from 'react'
import Button from './../comps/button'
import contactImg from './../assets/images/Contact-img.png'
import ArrowD from './../assets/images/arrowD.svg'
import keyboard from './../assets/images/keyboard.svg'
import send from './../assets/images/send.svg'
import mail from './../assets/images/mail.svg'

function LeftContact() {
  return (
    <div className="left-contact">
      <div className="left-contact-head">
        <h3>Got a project in<span> Mind?</span></h3>
      </div>

      <div className="left-contact-bottom">
        <div className="arrow-contact">
          <img src={ArrowD} alt=".." />
        </div>

        <div className="contact-img">
          <img src={contactImg} alt=".." />
        </div>
      </div>
    </div>
  )
}

function RightContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      message
    }

    fetch('http://localhost:3002/api/items', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => 
      console.log('success :', data) 
    )
    .catch(error =>  
      console.log('Error :', error)
    )
  }

  return (
    <div className="right-contact">
      <div className="contact-key">
        <img src={keyboard} alt=".." />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="name">
            <label htmlFor="name">your name</label>
              <input
              type="text" 
              placeholder='name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div>

          <div className="email">
          <label htmlFor="email">your email</label>
            <input 
            type="email" 
            placeholder='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <label htmlFor="message">your message</label>
          <textarea
           rows={10} 
           name="message" 
           id="message" 
           placeholder='message'
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           />

        <div className="contact-btn">
          <Button borderRadius={'25px'} size={'l'} hasImg={true} children={'send message'} imgSrc={send} color={'black'}/>
        </div>
      </form>

      <div className="mail">
        <img src={mail} alt=".." />
      </div>
    </div>
  )
}

export default function ContactMe() {
  return (
    <div className='contact' id='contact'>
      <LeftContact />
      <RightContact />
    </div>
  )
}
