import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>Let's Connect</h2>
        <div className="contact-card">
          <p><i className="fas fa-envelope"></i> pinalprajapati3543@gmail.com</p>
          <p><i className="fas fa-phone-alt"></i> +91 9586823708</p>
          <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/pinal-prajapati-4577272a4" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff' }}>linkedin.com/in/pinal-prajapati</a></p>
          <a href="mailto:pinalprajapati3543@gmail.com" className="btn btn-primary">Send Email <i className="fas fa-paper-plane"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;