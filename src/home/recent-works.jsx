import React, { useState } from 'react'
import Button from './../comps/button'
import workImg from './../assets/images/omeife.svg'
import workImg1 from './../assets/images/work-1.png'
import eCommerce from './../assets/images/e-commerce.svg'
import ideasPro from './../assets/images/newLogo.svg'
import superMario from './../assets/images/superMario.png'
import HangmanImg from './../assets/images/Hangman-Game.webp'
import campusForum from './../assets/images/campusForum.avif'

function Cards({
  category
}) {
  const cards = [
    {
      key: 0,
      name: 'project 1',
      imgSrc: workImg,
      caption: 'Omeife Technologies website',
      category: 'web-design'
    }, {
      key: 1,
      name: 'project 2',
      imgSrc: workImg1,
      caption: 'STEMfocus website',
      category: 'web-design'
    }, {
      key: 2,
      name: 'project 3',
      imgSrc: campusForum,
      caption: 'Online Campus chat-forum',
      category: 'app'
    }, {
      key: 3,
      name: 'project 4',
      imgSrc: ideasPro,
      caption: 'IdeasProgramme',
      category: 'web-design'
    }, {
      key: 4,
      name: 'project 5',
      imgSrc: eCommerce,
      caption: 'E-commerce Website',
      category: 'app'
    }, {
      key: 5,
      name: 'project 6',
      imgSrc: superMario,
      caption: 'Super Mario Bros',
      category: 'games'
    }, {
      key: 6,
      name: 'project 7',
      imgSrc: HangmanImg,
      caption: 'Hangman',
      category: 'games'
    }
  ]

  const filteredCards = cards.filter(card => category === 'all' || card.category === category)

  return (
    <div 
    className='card-cont'
    style={{
      transform: `translateX(${category === 'all' ? '0' : '10%'})`,
      transition: 'all 0.5s',
      display: 'grid',
      gridTemplateColumns: `${window.innerWidth <= 768 ? '1fr' : ''}`,
      width: '95%',
      margin: '0 auto'
    }}
    >
      {filteredCards.map((card, index) => { 
        let cardIndex = ''

        if (index === 0) {
          cardIndex = 'first'
        } else if (index === 1) {
          cardIndex = 'second'
        } else {
          cardIndex = 'third'
        }

        return (
         <div className={`image-container ${cardIndex}`}>
          <div className='number'>{`0${index + 1}`}</div>
          <figcaption className={`caption ${cardIndex}`}>{card.caption}</figcaption>
          <img src={card.imgSrc} alt=".." key={index} />
         </div>
      )})}
    </div>    
  )
}

export default function RecentWorks() {

  const [category, setCategory] = useState('all')

  return (
    <div className='recent-works'>

      <div className="recent-works-cont">
        <div className="recent-header">
          <p>My Recent<span>  Works</span></p>
        </div>

        <div className="btns">
          <div className="first-btn">
            <Button
             children={'All'}
             size={'small'}
             borderRadius={'25px'} 
             onClick={() => setCategory('all')}
            />
            <Button 
            children={'Games'} 
            size={'medium'} 
            borderRadius={'25px'} 
            onClick={() => setCategory('games')}
            />
          </div>
          <div className="sec-btn">
            <Button 
            children={'Applications'} 
            size={'medium'} 
            borderRadius={'25px'} 
            onClick={() => setCategory('app')}
            />
            <Button 
            children={'Web Designs'} 
            size={'medium'} 
            borderRadius={'25px'}
            onClick={() => setCategory('web-design')}  
            />
          </div>
        </div>

        <Cards category={category} />
      </div>

    </div>
  )
}
