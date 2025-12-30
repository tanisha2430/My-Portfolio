import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
x:0,
opacity:1,
transition:{
  duration:1,
  staggerChildren:0.1,
}
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  }
}

const slideVariants={
  initial:{
    x:0,
  },
  animate:{
x:"-220%",
transition:{
  duration:20,
  repeat:Infinity,
  repeatType:"mirrormotion."
}
  },
}

function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>TANISHA SAXENA</motion.h2>
        <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
        <motion.p variants={textVariants}>A young, dynamic and result-driven Full Stack Developer with hands-on experience across FinTech, mobile apps, cloud infrastructure, and scalable web systems. I aim to contribute to high-impact engineering teams by building secure, efficient, and user-centric solutions. </motion.p>

        <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
       </motion.div>
<motion.div className="sliding" variants={slideVariants} initial="initial" animate="animate">
Full Stack Developer 
</motion.div>

      <div className="imageContainer">
        <img src="/PhotoMe.png" alt="hero" />
      </div>
      </div>
    </div>

  )
}

export default Hero
