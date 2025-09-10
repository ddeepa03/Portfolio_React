import React, { useEffect } from "react";
import Typed from "typed.js";
import profile from "../assets/img/profile.jpeg"; 
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Frontend Developer", "Web Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's me</h3>
        <h1>Deepa Dhandapani</h1>
        <h3>
          And I'm a <span className="text"></span>
        </h3>
        <p>
          I'm a Full Stack Developer with expertise in creating website layouts,
          frontend designs, and building full-stack web applications.
        </p>

        <div className="home-sci">
          <a
            href="https://www.linkedin.com/in/deepa-d-74326229b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28}  />
          </a>
          <a
            href="https://github.com/ddeepa03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28}  />
          </a>
          <a
            href="mailto:deepadhandapani2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={28}  />
          </a>
        </div>

        <a href="/DeepaDhandapani_Resume.pdf" className="btn-box" download>
          Download CV
        </a>
      </div>

      <div className="home-img">
        <div className="outer-border">
          <div className="glow-circle">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
