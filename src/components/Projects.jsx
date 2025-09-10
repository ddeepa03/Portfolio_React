import img1 from "../assets/img/web development.jpg"; 
import img2 from "../assets/img/to-do.jpg"; 
import img3 from "../assets/img/garbage.jpg"; 


function Projects(){
return(
 <section className="projects" id="projects">
        <div className="portfolio" id="project">
          <div className="main-text" id="project">
            <h2>Latest <span>Projects</span></h2>
            <div className="portfolio-content">
              <div className="row">
                <img src={img1}/>
                <div className="layer">
                  <h5>Personal Portfolio Website</h5>
                  <p>A responsive and interactive portfolio website showcasing my profile, skills, services, and projects. Designed using HTML, CSS, and JavaScript with smooth animations, progress indicators, and a clean modern UI.</p>
                  
                </div>
              </div>

              <div className="row">
                <img src={img2}/>
                <div className="layer">
                  <h5>To-Do List Web App</h5>
                  <p>A dynamic and user-friendly task management application built using React. It allows users to add, edit, delete, and mark tasks as complete. Features include real-time updates, task filtering (All, Active, Completed), and persistent data storage using browser localStorage.</p>
                  
                </div>
              </div>

              <div className="row">
                <img src={img3}/>
                <div className="layer">
                  <h5>Garbage Management System</h5>
                  <p>A web-based system that allows users to register complaints related to waste collection. Admins can assign tasks to drivers, and drivers can track and update complaint status. Built using Java, JSP/Servlets, and MySQL following the MVC pattern.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
)
}


export default Projects;
