import './index.scss';
// import Education from "../../assets/images/education.png"; 
import React, { useEffect, useState } from "react";
import AnimatedLetter from "../AnimatedLetters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Card from './Cards';
import UF from "../../assets/images/UF.png"; 
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <br/>
                <br/>
                <br/>
                <h1>
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']} //EDUCATION
                        idx={15}
                    />
                    {/* <img src={Education} alt="education" /> */} 
                </h1>
                <div className='card-deck'> 
                    <Card 
                        frontImage={UF} 
                        frontContent="University of Florida"
                        backContent="Masters in Computer Science"
                    />
                    
                    <Card 
                        frontImage={UF} 
                        frontContent="KJ Somaiya College of Engineering"
                        backContent="Bachelors in Technology, Information Technolgy"
                    />
                </div>
                <br/>
                <br/>
                <br/>
                <h1>
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} //EXPERIENCE
                        idx={15}
                    />
                </h1>
                <div className='card-deck'> 
                    <Card 
                        frontImage={UF} 
                        frontContent="University of Florida"
                        backContent="Masters in Computer Science"
                    />
                    
                    <Card 
                        frontImage={UF} 
                        frontContent="KJ Somaiya College of Engineering"
                        backContent="Bachelors in Technology, Information Technolgy"
                    />
                </div>
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