import { React } from 'react'
import Loader from 'react-loaders'
import Tabs from "./Tabs";
import Grid from '@mui/material/Grid';
import './index.scss'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CinemaDemo from '../../assets/videos/demo-cine.mp4'
import HangmanDemo from '../../assets/videos/ahorcado.webm'
import ApiDemo from '../../assets/videos/api-web.mp4'
import SpringLogo from '../../assets/images/badges-logos/spring-logo.png'
import JakartaLogo from '../../assets/images/badges-logos/Jakarta.png'
import ThymeleafLogo from '../../assets/images/badges-logos/thymeleaf.png'
import ReactLogo from '../../assets/images/badges-logos/react.png'
import APILogo from '../../assets/images/badges-logos/api.png'
import MySQLLogo from '../../assets/images/badges-logos/mysql.png'
import DockerLogo from '../../assets/images/badges-logos/docker.png'
import JSPLogo from '../../assets/images/badges-logos/jsp.png'
import { faGithub} from '@fortawesome/free-brands-svg-icons'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@mui/material/Tooltip';

const Projects = () => {

  return (
    <>
      <div className="container projects-page">
        
        <div className="folder-zone">
          <Tabs>
            <div className='tab-content' label="Cinema">
            <Grid className='tab-content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <span className='title-grid' xs={12}>
                <h2>
                  Cinema Ticket Booking Website&nbsp;	
                  <Tooltip title="see code on Github" placement="right">
                  <a className='tooltip' target="_blank" rel='noreferrer' href='https://github.com/mariaalamocedillo/App-Cine'>
                      <FontAwesomeIcon icon={ faGithub } color='black' />  
                  </a>
                  </Tooltip>
                </h2>
              </span>
              <Grid className='content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className='demo-grid' item md={6}>
                    <video autoPlay={true} loop={true} controls width="100%">
                      <source src={CinemaDemo} type="video/mp4"/>
                      Sorry, your browser doesn't support videos.
                    </video>
                </Grid>
                <Grid className='info-grid' item md={6}>
                  <br />
                  <p>
                  Web-based platform that provides users with the ability to search 
                  and book cinema tickets online. Users can browse through movie listings, select show 
                  timings, and book tickets with just a few clicks. The administrative side provides cinema managers with tools 
                  to manage movie listings and show timings. 
                  </p>
                  <span>
                  <Stack className='techs-row' direction="row" spacing={1}>
                  <Chip
                      avatar={<Avatar alt="Jakarta" src={JakartaLogo} />}
                      label="Jakarta"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<Avatar alt="JSP" src={JSPLogo} />}
                      label="JSP"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<Avatar alt="MySQL" src={MySQLLogo} />}
                      label="MySQL"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<Avatar alt="Docker" src={DockerLogo} />}
                      label="Docker"
                      variant="outlined"
                    />
                  </Stack>

                  </span>
                  
                </Grid>
              </Grid>

            </Grid>

            </div>

            <div className='tab-content' label="Appointments">
            <Grid className='tab-content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid className='title-grid' item xs={12}>
                <h2>Vaccination Scheduling System</h2>
              </Grid>
              <Grid className='content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className='demo-grid' item md={6}>
                  <img className='video-demo' alt="complex" src="https://mui.com/static/images/grid/complex.jpg" />
                </Grid>
                <Grid className='info-grid' item md={6}>
                  <h3>Description</h3>
                  <p>
                  Web-based platform that enables individuals to schedule appointments for getting vaccinated. It has a 
                  user-friendly interface and provides a convenient way for people to find available vaccination slots 
                  from different Healthcare Centers and book their appointments. 
                  </p>
                  <span>
                  <Stack direction="row" spacing={1}>
                  <Chip
                      avatar={<Avatar alt="Jakarta" src={JakartaLogo} />}
                      label="Jakarta"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<Avatar alt="Spring" src={SpringLogo} />}
                      label="Spring"
                      variant="outlined"
                    />
                  </Stack>

                  </span>
                  
                </Grid>
              </Grid>

            </Grid>
            </div>

            <div className='tab-content' label="Others">
              <Grid className='tab-content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className='content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid className='demo-grid' item md={5}>
                    <video autoPlay={true} loop={true} controls width="100%">
                      <source src={HangmanDemo} type="video/mp4"/>
                      Sorry, your browser doesn't support videos.
                    </video>
                    <h2>Hangman&nbsp;	
                      <Tooltip title="see code on Github" placement="right">
                        <a className='tooltip' target="_blank" rel='noreferrer' href='https://github.com/mariaalamocedillo/Juego-Ahorcado'>
                          <FontAwesomeIcon icon={ faGithub } color='black' />  
                        </a>
                      </Tooltip>

                    </h2>
                    <p>
                    A web project for the Hangman game using the Model-View-Controller (MVC) architecture with Spring and Thymeleaf.
                    </p>
                    <span>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        avatar={<Avatar alt="Spring" src={SpringLogo} />}
                        label="Spring"
                        variant="outlined"
                      />
                      <Chip
                        avatar={<Avatar alt="Thymeleaf" src={ThymeleafLogo} />}
                        label="Thymeleaf"
                        variant="outlined"
                      />
                    </Stack>

                    </span>
                    
                  </Grid>
                  <Grid className='demo-grid' item md={2}>
                    <video autoPlay={true} loop={true} controls width={180}>
                      <source src={ApiDemo} type="video/mp4"/>
                      Sorry, your browser doesn't support videos.
                    </video>
                    </Grid>
                    <Grid className='demo-grid' item md={5}>
                    <h2>Fletcher the Fetcher&nbsp;	
                    <Tooltip title="see code on Github" placement="right">
                      <a className='tooltip' target="_blank" rel='noreferrer' href='https://github.com/petriscreating/useful-chicken'>
                        <FontAwesomeIcon icon={ faGithub } color='black' />  
                      </a>
                    </Tooltip>
                    </h2>
                    <p>
                    This is a simple React web app that makes use of different public APIs to display various types of data. 
                    The app has no specific purpose, but is intended to showcase how different APIs can be used in React.</p>
                    <span>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        avatar={<Avatar alt="React" src={ReactLogo} />}
                        label="React"
                        variant="outlined"
                      />
                      <Chip
                        avatar={<Avatar alt="API" src={APILogo} />}
                        label="API"
                        variant="outlined"
                      />
                    </Stack>

                    </span>
                    
                  </Grid>
                </Grid>
              </Grid>

            </div>
          </Tabs>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default Projects
