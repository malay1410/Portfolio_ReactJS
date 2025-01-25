import React from "react";
import './index.scss';
import LogoS from '../../../assets/images/M1.png' //Solid Logo
// import Malay from '../../../assets/images/IMG_3586.JPG' //Malay Photo

const Logo = () => {

    return (
        <div className="logo-container" >
            <img className='solid-logo' src={LogoS} alt="S"/>
        </div>
    )
}

export default Logo