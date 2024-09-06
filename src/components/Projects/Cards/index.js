import React from "react";
import "./index.scss";

const Card = ({
    projectTitle,
    frontImage,
    projectLink,
    projectCreatedOn,
    projectDescription,
    techStackIcons
}) => {
    
    return (
        <div className={`card-container`}>
            <div className="card">
                <div className="card-front">
                    <h3>{projectTitle}</h3>
                    {projectLink && (
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    )}
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
