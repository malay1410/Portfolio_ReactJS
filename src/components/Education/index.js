import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className='container eduaction-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>

            <div>
                <div className='container education-list'>
                    <article className='education-entry'>
                        <h2>Master's in Computer and Information Sciences and Engineering</h2>
                        <p>University of Florida</p>
                        <span>2023 - 2025</span>
                    </article>

                    <article className='education-entry'>
                        <h2>Bachelor's in Information Technology</h2>
                        <p>Mumbai University</p>
                        <span>2019 - 2023</span>
                    </article>
                </div>
            </div>
                    
                

                
            
            <Loader type="pacman" />
        </>
    )
}

export default Projects