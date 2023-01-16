import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import SpinningText from './SpinningText'
import './index.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
      return () => setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm("service_4lngnao","template_mottvc9", form.current, '5hn9SUszdgvgca1Av')
          .then(
            () => {
              alert('Message successfully sent!')

              
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    

    return (
        <> 
      <div className='container contact-page'>
          <div className='text-zone'>
              <h1>
                  <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={"Contact me".split("")}
                  idx={15}
                  />
              </h1>
              <p>
              I am enthusiastic about using my web development skills to work on engaging projects. 
              If you have a project in mind or any questions about my skills, don't hesitate to 
              contact me using the form or email button on the right!
              </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="from_name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="reply_to"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="interact-zone">
            <span className='interactive-content'>
              <SpinningText text="Thanks for passing by!    " size={'big'}>
                <SpinningText text="Thanks for passing by!    " size={'small'}>
                  <Link  onClick={() => window.open('https://drive.google.com/file/d/17Y5ZN3QsTdL1WXSLFbey04eKjVXuNNNs/view?usp=sharing', '_blank', 'noopener,noreferrer')} className='flat-button'>SEE MY CV</Link>
                  <Link onClick={() => window.location = 'mailto:maria.alamo.cedillo@gmail.com'} className='flat-button'>EMAIL ME</Link>
                </SpinningText>
              </SpinningText>
            </span>
          </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
