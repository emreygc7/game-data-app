import React from "react";
import Header from './Header';
import AboutImage from '../assets/img/about-image.jpg';  
import GithubImg from '../assets/img/github.svg'; 
import '../styles/about.css'; 

const About = () =>{
    return(
        <>
            <Header/>
            <div className="about-container">
                <div className="about-left">
                    <img className="about-image" src={AboutImage} alt="" />
                </div>
                <div className="about-right">
                <p className="about-title">This App created by <strong>Emre Yağcı</strong></p>
                <a href="https://github.com/emreygc7"><img className="github-image" src={GithubImg} alt="" /></a>
                </div>
              
            </div>
        </>
       
    )
}

export default About; 