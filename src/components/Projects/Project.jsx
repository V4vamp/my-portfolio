import React from "react";
import "./project.css";

const Project = () => {
    return(
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Some of my Projects</span>
        <div className="project__container">
            {/* <div className="project__content">
                <p>Portfolio Website</p>
                <p>A professional portfolio website highlighting my skills and projects as a Full Stack Developer.
                </p>
         
                <a href="https://github.com/ukadavid/react-portfolio" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://react-portfolio-git-main-ukadavid.vercel.app/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div>  */}
            <div className="project__content">
                <p>E - Commerce Web App</p>
                <p>Built using cutting-edge technologies to deliver a seamless shopping experience. Powered by Node.js and Express.js, it offers high-performance and scalability. The data is securely stored and managed in MongoDB, ensuring reliability and flexibility. User authentication and authorization are implemented using JWT for enhanced security. The dynamic and responsive front-end is crafted using EJS templates, providing an intuitive user interface. Developed in TypeScript, it guarantees type safety and improved code quality.</p>
                <a href="https://github.com/V4Vamp" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="#https://github.com/V4vamp" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>PassWord Generator</p>
                <p>Using JavaScript language to create a password generator that creates a password combination of alphabets, numbers and symbols
                </p>
                <a href="https://github.com/V4vamp" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github.com/V4vamp" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div>
            <div className="project__content">
                <p>Otaku Circle</p>
                <p>
                Otaku Circle, is an anime social community web app where anime lovers connect, interact, and share their passion for anime seamlessly. With a user-friendly interface and real-time chat powered by Socket.io, engage with like-minded fans worldwide. Meet nearby anime enthusiasts and build lasting friendships.Users explore profiles, follow users with similar interests, and exchange recommendations. User security is prioritize with bcrypt password hashing and JWT authentication
                </p>
                <a href="https://github.com/V4vamp" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github.com/V4vamp" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>USSD App</p>
                <p>
                The USSD App is a real-time data collection solution, leveraging Node.js and Express. It enables seamless data entry and retrieval via mobile devices without internet connectivity. With a user-friendly interface and MongoDB integration, it ensures secure and efficient data management. Revolutionizing data collection.</p>
                <a href="https://github.com/V4vamp" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github.com/V4vamp/my-ussd-app" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            
        </div>
    </section> 
    )
} 

export default Project