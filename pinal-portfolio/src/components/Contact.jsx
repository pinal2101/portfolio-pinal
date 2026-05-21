import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Phone number validation function
  const validatePhoneNumber = (value) => {
    const digitsOnly = value.replace(/\D/g, '');
    
    if (digitsOnly.length > 0 && digitsOnly.length !== 10) {
      setPhoneError('Mobile number must be exactly 10 digits');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  // Handle phone number input
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/\D/g, ''); // Remove non-digits
    const truncated = digitsOnly.slice(0, 10); // Limit to 10 digits
    
    e.target.value = truncated;
    validatePhoneNumber(truncated);
  };

  // Handle form submission with phone validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get phone value and validate
    const phoneInput = e.target.phone;
    const phoneValue = phoneInput?.value || '';
    const digitsOnly = phoneValue.replace(/\D/g, '');
    
    // Check if phone is provided and valid (if field is not empty)
    if (phoneValue && digitsOnly.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      phoneInput.focus();
      return;
    }
    
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formsubmit.co/pinalprajapati3543@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setStatus('✅ Message sent successfully! Company details will be sent to your email.');
        setLoading(false);
        e.target.reset();
        setPhoneError('');
      } else {
        setStatus('❌ Failed to send. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      setStatus('❌ Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="heading section-title contact_heading">
          Contact <span>Me!</span>
        </h2>

        <form className="contact_form" onSubmit={handleSubmit}>
          {/* Hidden fields for better email formatting */}
          <input type="hidden" name="_subject" value="New Company Inquiry from Portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="input_box row">
            <input 
              name="name" 
              type="text" 
              placeholder="Full Name" 
              required 
              data-aos="fade-right" 
              data-aos-duration="1500" 
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              required 
              data-aos="fade-left" 
              data-aos-duration="1500" 
            />
          </div>
          <div className="input_box row">
            <input 
              name="company_name" 
              type="text" 
              placeholder="Company Name" 
              required 
              data-aos="fade-right" 
              data-aos-duration="1500" 
            />
            <input 
              name="phone" 
              type="tel" 
              placeholder="Mobile Number" 
              onChange={handlePhoneChange}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              data-aos="fade-left" 
              data-aos-duration="1500" 
            />
          </div>
          {phoneError && (
            <p style={{ 
              color: '#ff4444', 
              fontSize: '0.8rem', 
              marginTop: '-10px',
              marginBottom: '10px',
              textAlign: 'left',
              paddingLeft: '10px'
            }}>
              ⚠️ {phoneError}
            </p>
          )}
          <textarea 
            name="Your Message" 
            rows={10} 
            placeholder="Your Message for me ..." 
            required
            data-aos="zoom-in" 
            data-aos-duration="1500" 
          />
          {status && <p className="form_status" style={{color: status.includes('✅') ? 'green' : 'red'}}>{status}</p>}
          <div className="submit">
            <input 
              className="send_msg" 
              type="submit" 
              value={loading ? "Sending..." : "Send Message"} 
              disabled={loading} 
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;