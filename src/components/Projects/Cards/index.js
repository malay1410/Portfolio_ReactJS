import React, { useState } from "react";
import "./index.scss";

const Card = ({
    projectTitle,
    frontImage,
    projectLink,
    projectCreatedOn,
    projectDescription,
    techStackIcons
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card">
                <div className="card-front">
                    <h3>{projectTitle}</h3>
                    {frontImage && <img src={frontImage} alt="Project Image" className="card-image" />}
                    {projectLink && (
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    )}
                </div>
                <div className="card-back">
                    <p><strong>Created on:</strong> {projectCreatedOn}</p>
                    <p>{projectDescription}</p>
                    <div className="tech-stack-icons">
                        {techStackIcons && techStackIcons.map((icon, index) => (
                            <img key={index} src={icon.src} alt={icon.alt} className="tech-icon" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
