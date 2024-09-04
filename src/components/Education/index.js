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

                    <div className='education-description'>
                        <div className='masters'>
                            <h1>University of Florida</h1>
                        </div>
                    </div>
                </div>

                
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects