import React from 'react';
import { FaCode } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <div className="container hero">
        <div className="hero-content">
          <div className="greeting">Hello, it's me</div>
          <h1>Pinal Prajapati</h1>
          <div className="hero-role">
            and I'm a <span>MERN Stack Developer</span>
          </div>
          <p className="hero-desc">
            Passionate full-stack developer with hands-on experience in React, Next.js, Node.js, 
            MongoDB, and Supabase. I build responsive, high-performance web apps.
          </p>
          <div className="btn-group">
            <button onClick={scrollToContact} className="btn btn-primary">
              Hire Me <i className="fas fa-paper-plane"></i>
            </button>
            <a href="#experience" className="btn btn-outline">
              My Work <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-circle">
            <FaCode />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;