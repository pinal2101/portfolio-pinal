import React from 'react';
import TypingRole from './TypingRole';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home_sec" id="home">
      <div className="container">
        <div className="row align_center justify_spc_btwn hero_inner">
          <div className="col_40 hero_col_text" data-aos="fade-up" data-aos-duration="2000">
            <div className="home_txt">
              <h2 className="font_50">hello it&apos;s me</h2>
              <h1 className="font_50">Pinal Prajapati</h1>
              <TypingRole />
              <p className="hero_tagline">
                This is my official portfolio website to showcase my work related to{' '}
                <span>MERN stack &amp; modern web apps</span>
              </p>
            </div>

            {/* Social Icons - Row wise (horizontal) */}
            <div className="social hero-social-inline">
              <ul className="social-icons-row">
                <li>
                  <a href="mailto:pinalprajapati3543@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <i className="align_center justify_center fa-regular fa-envelope" />
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
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="align_center justify_center fa-brands fa-github" />
                  </a>
                </li>
                {/* Instagram icon removed */}
              </ul>
            </div>

            {/* <div className="cv">
              <a className="btn-link behance-btn" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" /> GitHub Profile
              </a>
            </div> */}

            <div className="btn-group hero_extra_btns">
              <button type="button" onClick={scrollToContact} className="btn btn-primary">
                Hire Me <i className="fas fa-paper-plane" />
              </button>
              {/* <button type="button" onClick={scrollToProjects} className="btn btn-outline">
                My Work <i className="fas fa-arrow-right" />
              </button> */}
            </div>
          </div>

          <div className="col_40 hero_col_photo">
            <div className="my_photo">
              <div className="hero_photo_placeholder rect_placeholder" aria-hidden="true" />
              <div className="myphoto img_100 hero_avatar_img">
                <i className="fas fa-code hero_avatar_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Fix for social icons - horizontal row layout */
        .social-icons-row {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .social-icons-row li {
          display: inline-flex;
        }
        
        .social-icons-row li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .social-icons-row li a:hover {
          background: #007bff;
          transform: translateY(-3px);
        }
        
        /* Fix for GitHub button */
        .cv {
          margin: 1rem 0;
        }
        
        .cv .behance-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        /* Button group fixes */
        .btn-group {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .btn-group button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Hero;