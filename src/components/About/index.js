import './index.scss';
// import Education from "../../assets/images/education.png"; 
import React, { useEffect, useState } from "react";
import AnimatedLetter from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
// import Card from './Cards';
// import UF from "../../assets/images/UF.png"; 
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState(`text-animate`)

    useEffect(() => {
        const timer = setTimeout(() => { 
            setLetterClass('text-animate-hover')
        },3000);
    
        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} //ABOUT ME
                        idx={15}
                    />
                </h1>
                <h2 className="first-word-uppercase-h2">
                    As a recent graduate in Information Technology Engineering, I am driven by a deep passion for the field, 
                    which has led me to further my education. I am currently pursuing my Master’s in Computer and Information 
                    Sciences and Engineering at the University of Florida in the USA. My academic journey has provided me with 
                    a solid foundation in computer science, programming, data analytics, and project management.
                </h2>
                <h2 className="first-word-uppercase-h2">
                    Through various internships and academic projects, I’ve gained hands-on experience in software development, 
                    database design, and data analysis. Working collaboratively with teams has not only allowed me to deliver 
                    projects successfully but has also sharpened my communication and leadership abilities.
                </h2>
                <h2 className="first-word-uppercase-h2">
                    This advanced degree is deepening my expertise and preparing me for a thriving career in the tech industry. 
                    I am always open to exploring opportunities that align with my skills and interests and welcome any connections 
                    or conversations in this space. Thank you for visiting my profile!
                </h2>
                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About