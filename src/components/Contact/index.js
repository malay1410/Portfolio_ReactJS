import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState, useRef } from "react";
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';



const Contact = () => {

    const [letterClass, setLetterClass] = useState(`text-animate`)
    const refForm = useRef();

    useEffect(() => {
        const timer = setTimeout(() => { 
            setLetterClass('text-animate-hover')
        }, 3000);
    
        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_xeil2yo',
                refForm.current,
                'UB-gIrnWbu8GvBR4P'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
    
                    <p>Mobile: +1 (813)-998-4466</p>
    
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder="Subject" 
                                        type="text" 
                                        name="subject" 
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder="Message"
                                        name="message"
                                        required
                                    />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Malay Bhatt,
                    <br />
                    United States of America,
                    <br />
                    4000 SW 37th BLVD<br />
                    Gainesville <br />
                    <br />
                    <span>malay1410@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Sloba lives here, come over for a cup of coffee</Popup>
                        </Marker>
                    </MapContainer> */}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}    

export default Contact