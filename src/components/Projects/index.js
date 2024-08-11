import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import TextShpere from '../TextSphere';

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
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <TextShpere />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects