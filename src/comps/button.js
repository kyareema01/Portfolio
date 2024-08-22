import React from 'react'

export default function Button({ borderRadius, size, onClick, children, hasImg, imgSrc, color }) {
  return (
    <button
      style={{borderRadius}}
      className={`btn ${size}`}
      onClick={onClick}
    >
      {children}
      {hasImg && <img style={{color}} src={imgSrc} alt='..' />}
    </button>
  )
}
