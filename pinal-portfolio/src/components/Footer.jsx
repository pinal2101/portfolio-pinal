import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social footer_icons">
          <ul>
            <li>
              <a href="tel:+919586823708" target="_blank" rel="noopener noreferrer" aria-label="Phone">
                <i className="justify_center align_center fa-solid fa-phone" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/919586823708" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="justify_center align_center fa-brands fa-whatsapp" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pinal-prajapati-4577272a4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="align_center justify_center fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              {/* Instagram removed - GitHub added below */}
              <a 
                href="https://github.com/pinalprajapati" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <i className="align_center justify_center fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_txt">
          <p className="footer_muted">Designed &amp; Developed by Pinal Prajapati</p>
          <p>
            Copyright &copy; {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;