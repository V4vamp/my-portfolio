import React from "react";
import hellopic from '../../assets/wave.png';


const Data = () => {
    return(
        <div className="home__data">
            <h1 className="home__title">
                Hi
                <img className="home__hand" src={hellopic} alt="my profile" />
            </h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">As a proactive software engineer, I excel in agile development practices, prioritizing user-centric solutions, and approaching challenges as valuable opportunities for personal and professional growth.</p>

            <a href="#contact" className="button button--flex">
                Say Hi <i class="button__contact uil uil-envelope-send"></i>
            </a>
        </div>
    )
}

export default Data;