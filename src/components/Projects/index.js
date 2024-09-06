import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState } from "react";
import Card from './Cards'
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
            <div className='container projects-page overflow-y-auto'>
                <div className='project-title-sphere-container'>
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


                <div className='projects-cards-container'>
                    
                <Card
                    projectTitle="Decentralized Car Rental App"
                    projectLink="https://github.com/BhavikMehta57/car_rental_app"
                    projectCreatedOn="May 2022"
                    projectDescription="The project enables direct car rentals between users, 
                                        eliminating middlemen, with a user-friendly interface and 
                                        secure blockchain-based decentralized transactions for privacy."
                />

                <Card
                    projectTitle="Gator Library"
                    projectLink="https://github.com/malay1410/gatorlibrary"
                    projectCreatedOn="November 2023"
                    projectDescription="Developed an advanced Library Management System using Red-Black trees 
                                        and Binary Min-Heaps, optimizing book reservations and enhancing efficiency 
                                        in large-scale institutions. Implemented innovative features and visualizations."
                />     

                <Card
                    projectTitle="Blockchain Based Student Verification Technology"
                    projectLink="https://github.com/vaibhavvesmaker/studofierlyproj"
                    projectCreatedOn="May 2023"
                    projectDescription="Developed a blockchain-based system for comprehensive candidate validation, 
                                        automating data collection and verification. Enhanced recruitment process reliability 
                                        and employer confidence through secure, tamper-proof record-keeping."
                />          
                
                <Card
                    projectTitle="Black Jack Game using PixiJS"
                    projectLink="https://github.com/malay1410/black-jack-pixijs"
                    projectCreatedOn="August 2024"
                    projectDescription="Developed a Blackjack game in TypeScript, 
                                        featuring player-versus-computer gameplay. Implemented core game logic, 
                                        user interactions, and outcome determination for an engaging experience."
                />

                <Card
                    projectTitle="Chat App using Flutter"
                    projectLink="https://github.com/BhavikMehta57/chat_app"
                    projectCreatedOn="April 2021"
                    projectDescription="Developed a cross-platform chat application using Flutter and Firebase, 
                                        featuring real-time messaging, user authentication, multimedia sharing, 
                                        and an intuitive UI for seamless communication."
                />   

                <Card
                    projectTitle="Theatre Reservation System"
                    projectLink="https://github.com/malay1410/theatre-reservation-system"
                    projectCreatedOn="Feb 2021"
                    projectDescription="Developed a dynamic theatre reservation system using ReactJS, 
                                        featuring interactive seat selection, real-time availability updates, 
                                        secure payment integration, and user-friendly booking management for an 
                                        enhanced ticketing experience."
                />       

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects