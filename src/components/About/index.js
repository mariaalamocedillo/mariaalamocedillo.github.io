import { React, useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Tooltip from './CustomizedTooltips'
import TechBoardImg from '../../assets/images/Board-technologies.png'
import SplineScene from '../SplineScene'
import './index.scss'
import { StyledEngineProvider } from '@mui/material/styles';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

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
          <p className='inline-p'>
            I am María, a recent graduate in &nbsp;</p>
            <StyledEngineProvider injectFirst>
              <Tooltip />
            </StyledEngineProvider>&nbsp; <p className='inline-p'>with a passion for learning and growth in the field. 
            My studies have given me a solid foundation in programming languages such as HTML, CSS, JavaScript, Java, and PHP, 
            as well as experience with frameworks like Spring and Jakarta EE, and knowledge of both relational and non-relational databases.           
          </p>
          <p align="LEFT"> 
            I am excited to bring my skills and enthusiasm to a team and contribute to the creation of innovative and high-quality web applications. 
            If you are looking for a dedicated and reliable web developer, please feel free to contact me. I am excited to discuss 
            how I can help in your team and continue to grow as a developer.
          </p>
        </div>

        <div className="canvas-cont">
          {windowSize.current[0] < 768 ? (
              <img src={TechBoardImg} alt="technologies In have experience with"  />         
            ) : (
              <SplineScene url={'https://prod.spline.design/Vide5dz4a-En2yRw/scene.splinecode'} />
            )}

        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default About
