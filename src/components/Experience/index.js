import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';

const Experience = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className='container eduaction-page' style={{ marginTop: '-200px' }}>
                <div className='text-zone' >
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>

            <div>
                <div className='container education-list' style={{ marginTop: '185px' }}>
                    <article className='education-entry'>
                        <h2>University of Florida</h2>
                        <p>Graduate Research Assistant</p>
                        <p>● Architected mission-critical healthcare interfaces for IC3 using ReactJS and modern frontend architecture, resulting
                        in 45% faster patient data access and supporting 10,000+ daily clinical interactions.</p>
                       <p>● Engineered 30+ reusable React components and custom hooks, reducing development time by 60% and improving
                        code maintainability across 5 major clinical applications.</p>
                        <p>● Spearheaded cross-functional collaboration with UX teams to implement responsive healthcare dashboards,
                        achieving 98% user satisfaction among medical professionals and reducing training time by 40%.</p>
                        <span>Sept 2024 - Present</span>
                    </article>

                    <article className='education-entry'>
                        <h2>Levyne</h2>
                        <p>Software Engineer</p>
                        <p>● Architected and deployed a high security React/NextJS application serving 500+ concurrent users, featuring OTP
                        authentication, automated emails, and real-time order management, improved operational efficiency by 40%</p>
                        <p>● Engineered an enterprise-grade analytics dashboard with 10+ interactive data visualizations using D3.js and React,
                        driving 65% faster decision-making and increasing revenue visibility by 85%.</p>
                        <p>● Spearheaded full-stack innovations including AI-powered virtual try-on technology and Google Maps integration,
                        resulting in 60% surge in traffic and 30% boost in user engagement, while implementing automated testing that
                        reduced QA cycles by 80% [ReactJS, NextJS, Selenium]</p>
                        <span>Mar 2021 - Aug 2021</span>
                    </article>

                    <article className='education-entry'>
                        <h2>K.J.S.C.E.</h2>
                        <p>Student Research, Software Engineer</p>
                        <p>● Engineered chat app, ensuring complete anonymity for 1000+ users to engage in confidential conversations.</p>
                        <p>● Enabling seamless interactions, file exchanges with virus scan, and photo sharing in a discreet, permission-free environment with size limit of 25 MB.</p>
                        <p>● Elevated user data protection by integrating TOR to route traffic, delivering a 70% boost in anonymity and security. </p>
                        <p>● Developed load testing framework to test the application with 100+ concurrent users. [Flutter, TOR, Firebase]</p>
                        <span>Oct 2020 - July 2021</span>
                    </article>
                </div>
            </div>
                    
                

                
            
            <Loader type="pacman" />
        </>
    )
}

export default Experience

// import Loader from 'react-loaders';
// import './index.scss';
// import React, { useEffect, useState } from "react";
// import AnimatedLetters from '../AnimatedLetters';

// const Experience = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLetterClass('text-animate-hover')
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, [])

//     return (
//         <>
//             <div className='container experience-page'>
//                 <div className='text-zone' style={{ marginTop: '-200px' }}> {/* Added style here */}
//                     <h1>
//                         <AnimatedLetters
//                             letterClass={letterClass}
//                             strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
//                             idx={15}
//                         />
//                     </h1>
//                 </div>

//                 <div className='education-list'>
//                     <article className='education-entry'>
//                         <h2>Master's in Computer and Information Sciences and Engineering</h2>
//                         <p>University of Florida</p>
//                         <span>2023 - 2025</span>
//                     </article>

//                     <article className='education-entry'>
//                         <h2>Bachelor's in Information Technology</h2>
//                         <p>Mumbai University</p>
//                         <span>2019 - 2023</span>
//                     </article>

//                     <article className='education-entry'>
//                         <h2>Master's in Computer and Information Sciences and Engineering</h2>
//                         <p>University of Florida</p>
//                         <span>2023 - 2025</span>
//                     </article>

//                     <article className='education-entry'>
//                         <h2>Bachelor's in Information Technology</h2>
//                         <p>Mumbai University</p>
//                         <span>2019 - 2023</span>
//                     </article>
//                 </div>
//             </div>
            
//             <Loader type="pacman" />
//         </>
//     )
// }

// export default Experience
