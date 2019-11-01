import React from 'react'
import style from './style.module.css'

const Hero = ({ heading, subheading }) => {
  return (
    <div className={style.hero}>
      <h1 className={style.title}>{heading}</h1>
      <p className={style.subheading}>{subheading}</p>
    </div>
  )
}

export default Hero
