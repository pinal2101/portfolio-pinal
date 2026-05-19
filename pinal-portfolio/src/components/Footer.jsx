import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/pinal-prajapati-4577272a4" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:pinalprajapati3543@gmail.com"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Pinal Prajapati — MERN Stack Developer | Built with ⚛️ React</p>
      </div>
    </footer>
  );
};

export default Footer;