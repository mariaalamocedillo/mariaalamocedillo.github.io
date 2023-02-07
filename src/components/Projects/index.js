import { React } from 'react'
import Loader from 'react-loaders'
import Tabs from "./Tabs";
import Grid from '@mui/material/Grid';
import './index.scss'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SpringLogo from '../../assets/images/badges-logos/spring-logo.png'
import JakartaLogo from '../../assets/images/badges-logos/Jakarta.png'
import MySQLLogo from '../../assets/images/badges-logos/mysql.png'
import DockerLogo from '../../assets/images/badges-logos/docker.png'
import JSPLogo from '../../assets/images/badges-logos/jsp.png'

const Projects = () => {

  return (
    <>
      <div className="container projects-page">
        
        <div className="folder-zone">
          <Tabs>
            <div className='tab-content' label="Cinema">
            <Grid className='tab-content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid className='title-grid' item xs={12}>
                <h2>Cinema Ticket Booking Website</h2>
              </Grid>
              <Grid className='content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className='demo-grid' item md={6}>
                  <img className='video-demo' alt="complex" src="https://mui.com/static/images/grid/complex.jpg" />
                </Grid>
                <Grid className='info-grid' item md={6}>
                  <h3>Description</h3>
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

            <div className='tab-content' label="Hangman">
              <Grid className='tab-content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className='title-grid' item xs={12}>
                  <h2>Hangman Online</h2>
                </Grid>
                <Grid className='content-grid' container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid className='demo-grid' item md={6}>
                    <img className='video-demo' alt="complex" src="https://mui.com/static/images/grid/complex.jpg" />
                  </Grid>
                  <Grid className='info-grid' item md={6}>
                    <h3>Description</h3>
                    <p>
                      ---------------------Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          </Tabs>
        </div>
      </div>

      <Loader type='pacman' />
    </>
  )
}

export default Projects
