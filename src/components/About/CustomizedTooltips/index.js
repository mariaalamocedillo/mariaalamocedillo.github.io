import React from 'react'
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 400,
      fontSize: theme.typography.pxToRem(14),
      border: '1px solid #dadde9',
      margin: 3,
    },
  }));


export default function CustomizedTooltips() {
    return (
      <>
        <HtmlTooltip
          title={
            <React.Fragment>
              <img className='img-certificate' src="https://www.svgrepo.com/show/457147/certificate.svg" width={'15%'} alt={'Certificate svg logo'}/>
              <Typography color="inherit"><b>Certificate of Higher Education (HNC) on Web Applications Development</b></Typography>
              <hr />
              <ul>
                <li><em>{'Fundamentals of digital Marketing Certificate'}</em> {'-'} <u>{'Google Digital Garage'}</u></li>
                <li><em>{'Git, GitHub and Jekyll Certificate'}</em> {'-'} <u>{'OpenWebinars'}</u></li>
                <li><em>{'Spring Boot and Spring MVC 5 Certificate'}</em> {'-'} <u>{'OpenWebinars'}</u></li>
                <li><em>{'Web Server Apache 2.4 Certificate'}</em> {'-'} <u>{'OpenWebinars'}</u></li>
                <li><em>{'Introduction to Thymeleaf Certificate'}</em> {'-'} <u>{'OpenWebinars'}</u></li>
              </ul>
            </React.Fragment>
          }
        >
            <Chip label="Web Applications Development" color='default' variant="outlined" className='chip-studies chip-animate-hover'/>
        </HtmlTooltip>
      </>
    );
  }