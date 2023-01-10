import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React, { Suspense } from 'react';

const Spline = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 4 * 1000)).then(
      () => import("@splinetool/react-spline")
    );
  });


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = " María".split("")
    const jobArray = "Web developer.".split("")

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br /> 
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>

                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={17}
                    />
                    <br />
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={23}
                    />
                </h1>
                <h2>Web Applications Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <div className='canvas-container'>
                <Suspense fallback={<Loader type='pacman' />}>
                    <Spline scene="https://prod.spline.design/G2E5Gp1tTLVz1Ubr/scene.splinecode" />
                </Suspense>     

            </div>
            
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home