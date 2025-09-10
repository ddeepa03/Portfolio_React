const Header = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">Portfolio</a>

        <nav className="navbar">
          <a href="#home" style={{ "--i": 1 }} className="active">Home</a>
          <a href="#about" style={{ "--i": 2 }}>About</a>
          <a href="#services" style={{ "--i": 3 }}>Services</a>
          <a href="#skills-section" style={{ "--i": 4 }}>Skills</a>
          <a href="#projects" style={{ "--i": 5 }}>Projects</a>
          <a href="#contact" style={{ "--i": 6 }}>Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
