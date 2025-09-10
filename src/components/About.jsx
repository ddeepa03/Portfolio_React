import profile from "../assets/img/profile.jpeg"; 


function About(){
return(
   <section className="about" id="about">
        <div className="about-img">
            <div className="about-outer-border">
                <div className="about-glow-circle">
            <img src={profile} alt="Profile Picture"/>
                </div>
            </div>
        </div>
        <div className="about-text">
            <h2>About <span>Me</span></h2>
            <h4>Full Stack Developer!</h4>
            <p>I am a passionate and dedicated Java Full Stack Developer with a strong foundation in both frontend and backend technologies. As a fresher, I bring enthusiasm, a problem-solving mindset, and hands-on experience in building responsive websites and full-stack web applications.

                My expertise includes creating dynamic user interfaces using HTML, CSS, JavaScript, React.js, and developing robust backend systems with Java, J2EE, and SQL. I follow modern development practices and strive to deliver clean, maintainable code.
                
                I have worked on projects that showcase my ability to handle end-to-end development — from designing interactive UIs to implementing secure RESTful APIs and managing databases.
                
                I’m eager to contribute to innovative projects, continuously learn new technologies, and grow as a developer in a collaborative environment.</p>
        
            </div>

    </section>
)
}


export default About;
