// import React from 'react';
// import './index.scss';

// const Card = ({ title, image, description }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card__image" />
//       <div className="card__content">
//         <h2 className="card__title">{title}</h2>
//         <p className="card__description">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

// Filename - App.js

import React, { useState } from "react";
import "./index.scss";

const Card = ({ frontImage,frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card">
                <div className="card-front">
                    {frontImage && <img src={frontImage} alt="Front of Card" className="card-iamge"/>}
                    <div> {frontContent} </div>
                </div>
                <div className="card-back"> {backContent} </div>
            </div>
        </div>
    );
};

export default Card;

