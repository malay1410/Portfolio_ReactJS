import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/M1.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>

            <nav>

                <NavLink exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" >
                    <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
                </NavLink>

            </nav>

            <ul>

                <li>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://www.linkedin.com/in/malaybhatt1410/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />

                    </a>
                </li>

                <li>
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://github.com/malay1410'
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />

                    </a>
                </li>

            </ul>
    </div>
    )
    
} 

export default Sidebar
