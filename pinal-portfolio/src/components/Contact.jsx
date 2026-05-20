import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! This demo form doesn’t send email yet — use mailto or connect your backend.');
    const form = e.target;
    const email = form.email?.value;
    const subject = form.subject?.value || 'Portfolio contact';
    const body = encodeURIComponent(form.message?.value || '');
    if (email) {
      window.location.href = `mailto:pinalprajapati3543@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="heading section-title contact_heading">
          Contact <span>Me!</span>
        </h2>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="input_box row">
            <input name="full_name" type="text" placeholder="Full Name" data-aos="fade-right" data-aos-duration="1500" />
            <input name="email" type="email" placeholder="Email Address" data-aos="fade-left" data-aos-duration="1500" />
          </div>
          <div className="input_box row">
            <input name="phone" type="tel" placeholder="Mobile Number" data-aos="fade-right" data-aos-duration="1500" />
            <input name="subject" type="text" placeholder="Email subject" data-aos="fade-left" data-aos-duration="1500" />
          </div>
          <textarea name="message" rows={10} placeholder="Your Message" data-aos="zoom-in" data-aos-duration="1500" />
          {status && <p className="form_status">{status}</p>}
          <div className="submit">
            <input className="send_msg" type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
