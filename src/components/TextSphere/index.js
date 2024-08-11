import React, { useEffect } from 'react';
import './index.scss';
import TagCloud from 'TagCloud';

const TextShpere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
      return () => {
        const container = ".tagcloud";
        const texts = [
            "Java", 
            "Python", 
            "C", 
            "C++", 
            "C#", 
            "ReactJS", 
            "Angular JS", 
            "NextJS", 
            "ThreeJS", 
            "NodeJS", 
            "JavaScript", 
            "jQuery",
            "PHP", 
            "Django", 
            "Flutter", 
            "Rest API", 
            "HTML", 
            "CSS",
            "MySQL",
            "FireBase",
            "AWS",
            "GCP",
            "GitHub"
        ];
  
        const options = {
          radius: 300,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        };
  
        TagCloud(container, texts, options);
      };
    }, []);

    return (
        <>
          <div className="text-shpere">
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
          </div>
        </>
      );
    };
    
    export default TextShpere;