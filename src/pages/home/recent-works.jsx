import React from 'react'
import Button from '../../comps/button'
import workImg from '../../assets/images/omeife.svg'
import workImg1 from '../../assets/images/work-1.png'
import workImg2 from '../../assets/images/work-2.png'

function Cards() {
  const cards = [
    {
      key: 0,
      name: 'project 1',
      imgSrc: workImg,
      caption: 'Omeife Technologies website'
    }, {
      key: 1,
      name: 'project 2',
      imgSrc: workImg1,
      caption: 'STEMfocus website'
    }, {
      key: 2,
      name: 'project 3',
      imgSrc: workImg2,
      caption: 'Online Campus chat-forum'
    }
  ]

  return (
    <div className='card-cont'>
      {cards.map((card, index) => { 
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
  return (
    <div className='recent-works'>

      <div className="recent-works-cont">
        <div className="recent-header">
          <p>My Recent<span>  Works</span></p>
        </div>

        <div className="btns">
          <div className="first-btn">
            <Button children={'All'} size={'small'} borderRadius={'25px'} />
            <Button children={'Games'} size={'medium'} borderRadius={'25px'} />
          </div>
          <div className="sec-btn">
            <Button children={'Applications'} size={'medium'} borderRadius={'25px'} />
            <Button children={'Web Designs'} size={'medium'} borderRadius={'25px'} />
          </div>
        </div>

        <Cards />
      </div>

    </div>
  )
}
