import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline'



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I am María, a recent graduate in Web Applications Development with a passion for learning and growth in the field. 
            My studies have given me a solid foundation in programming languages such as HTML, CSS, JavaScript, Java, and PHP, 
            as well as experience with frameworks like Spring and Jakarta EE, and knowledge of both relational and non-relational databases.           
          </p>
          <p align="LEFT">
            I am a strong problem solver with excellent communication and collaboration skills. In my free time, I am always seeking 
            new learning opportunities to expand my knowledge in web and software development. I am excited to bring my skills and enthusiasm 
            to a team and contribute to the creation of innovative and high-quality web applications. 
          </p>
          <p>
            If you are looking for a dedicated and reliable web developer, please feel free to contact me. I am excited to discuss 
            how I can join your team and continue to grow as a developer.
          </p>
        </div>

        <div className="canvas-cont">
          <Suspense fallback={<Loader type='pacman' />}>
            <Spline scene="https://prod.spline.design/Vide5dz4a-En2yRw/scene.splinecode" />
          </Suspense>     
        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default About
