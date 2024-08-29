import React from "react";
import './index.scss';
import LogoS from '../../../assets/images/M1.png' //Solid Logo


const Logo = () => {

    return (
        <div className="logo-container" >
            <img className='solid-logo' src={LogoS} alt="S"/>
        </div>
    )
}

export default Logo