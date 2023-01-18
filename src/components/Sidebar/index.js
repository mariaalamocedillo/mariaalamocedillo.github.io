import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Logo2.svg'
import LogoSubtitle from '../../assets/images/LogoSub.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'  

const Sidebar = () => {


    return (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='maria' /> 
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='white' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='white' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='white' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maria-alamo-cedillo-b0b3ba19a/'>
                    <FontAwesomeIcon icon={ faLinkedin } color='white' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mariaalamocedillo'>
                    <FontAwesomeIcon icon={ faGithub } color='white' />
                </a>
            </li>
        </ul>
    </div>
    )
}


export default Sidebar