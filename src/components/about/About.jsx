import React from "react";
import "./about.css";
import profilepic from "../../assets/Cover.jpg";
import CV from "../../assets/Tobechukwu Uka_Resume.pdf"
import downloadicon from "../../assets/download.png"
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img className="about__img" src={profilepic} alt="my profile" />
                
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    As a Node.js software engineer, 
            I possess a strong background in developing scalable applications. 
            I am proficient in a range of modern technologies, 
            including Node.js, Express.js, TypeScript, React, MongoDB, PostgreSQL, MySQL, Heroku, 
            payment integration, REST API development, Firebase, JIRA, Docker, and more. 
            In addition to my technical expertise, 
            I am highly proactive in learning new technologies, excel in technical documentation, 
            and possess exceptional communication and collaboration skills. I am adept at problem-solving, 
            experienced in Agile methodologies, and have a solid understanding of QA/testing practices.</p>

                    <a download="" href={CV} className=" button button--flex">Download CV <img className="btn__download" src={downloadicon} alt="download icon" /></a>
                </div>

            </div>
            
        </section>
    )
}

export default About;