import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import SpinningText from './SpinningText'
import './index.scss'

import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [open, setOpen] = React.useState(false);
    const form = useRef()
  
    const handleClose = () => {
      setOpen(false);
    };
  
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
              setOpen(true)
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
                <SpinningText text="Thanks for passing by!    ">
                  <Link onClick={() => window.open('https://drive.google.com/file/d/17Y5ZN3QsTdL1WXSLFbey04eKjVXuNNNs/view?usp=sharing', '_blank', 'noopener,noreferrer')} className='flat-button'>SEE MY CV</Link>
                  <Link onClick={() => window.location = 'mailto:maria.alamo.cedillo@gmail.com'} className='flat-button'>EMAIL ME</Link>
                </SpinningText>
            </span>
          </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Form sent!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            Thank you for reaching out to me through this form. 
            I appreciate your interest and will be in touch with you soon. Have a great day!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
