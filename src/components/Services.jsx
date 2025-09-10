import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="sub-title">
          My <span>Services</span>
        </h1>
        <div className="services-list">
          <div>
            <FaCode size={40} style={{ color: "#00eeff" }} />
            <h2>Frontend Web Development</h2>
            <p>
              I design and develop responsive, user-friendly interfaces using HTML, CSS,
              JavaScript, and React.js. My focus is on creating visually appealing layouts
              that work seamlessly across all devices and browsers.
            </p>
          </div>

          <div>
            <FaServer size={40} style={{ color: "#00eeff" }} />
            <h2>Backend Development</h2>
            <p>
              I build secure, scalable RESTful APIs using Java, J2EE, and MySQL. My backend
              solutions ensure efficient server-side logic, strong database management, and
              seamless integration with frontend systems for smooth performance.
            </p>
          </div>

          <div>
            <FaLayerGroup size={40} style={{ color: "#00eeff" }} />
            <h2>Full Stack Applications</h2>
            <p>
              I develop full-stack applications by integrating frontend and backend
              technologies. From UI design to backend development and database handling, I
              ensure a cohesive, functional, and user-centric web application experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
