import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              Hey, I'm Pinal — a MERN stack developer with internship experience and a hunger to learn. 
              I've developed and optimized dynamic web apps using React, Next.js, and Node.js. 
              I enjoy building REST APIs, integrating JWT authentication, and working with cloudinary file uploads.
            </p>
            <p>
              My goal is to work with an organization where I can learn new skills and increase my abilities 
              for organizational goals as well as personal growth.
            </p>
          </div>
            <div className="about-text" style={{ color: '#9090b0', lineHeight: '1.7' }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                Hey, I'm Pinal — a MERN stack developer with professional experience and a hunger to learn. 
                I've developed and optimized dynamic web apps using React, Next.js, and Node.js. 
                I enjoy building REST APIs, integrating JWT authentication, and working with cloudinary file uploads.
              </p>
              <p>
                My goal is to work with an organization where I can learn new skills and increase my abilities 
                for organizational goals as well as personal growth.
              </p>
            </div>
          <div className="info-card">
            <div className="info-item"><span className="info-label">Name</span><span className="info-value">Pinal Prajapati</span></div>
            <div className="info-item"><span className="info-label">Email</span><span className="info-value">pinalprajapati3543@gmail.com</span></div>
            <div className="info-item"><span className="info-label">Age</span><span className="info-value">24 Years (Born 2001)</span></div>
            <div className="info-item"><span className="info-label">Phone</span><span className="info-value">+91 9586823708</span></div>
            <div className="info-item"><span className="info-label">Location</span><span className="info-value">Ahmedabad, India</span></div>
            <div className="info-item"><span className="info-label">Freelance</span><span className="info-value">Available ✅</span></div>
              <div className="info-item"><span className="info-label">LinkedIn</span><span className="info-value"><a href="https://www.linkedin.com/in/pinal-prajapati-4577272a4" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff' }}>pinal-prajapati</a></span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;