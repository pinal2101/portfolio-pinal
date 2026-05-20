import React from 'react';

const services = [
  {
    iconClass: 'fa-solid fa-3x fa-code',
    title: 'Web Development',
    desc: 'Full-stack web application development, Responsive website design, Single Page Applications (SPA), Progressive Web Apps (PWA)',
  },
  {
    iconClass: 'fa-solid fa-3x fa-laptop-code',
    title: 'Frontend Development',
    desc: 'React.js / Next.js applications, Interactive UI/UX implementation, State management (Redux, Context API), Responsive design with Tailwind CSS, Bootstrap, MUI',
  },
  {
    iconClass: 'fa-solid fa-3x fa-server',
    title: 'Backend Development',
    desc: 'RESTful API development, Node.js & Express.js applications, Authentication & Authorization (JWT, OAuth), Database design & management',
  },
  {
    iconClass: 'fa-solid fa-3x fa-database',
    title: 'Database Services',
    desc: 'MongoDB database design, Mongoose ODM implementation, Database optimization & indexing, Data migration & backup',
  },
  {
    iconClass: 'fa-solid fa-3x fa-plug',
    title: 'API Integration',
    desc: 'Third-party API integration, Payment gateway integration (Razorpay, Stripe), Social media APIs, Cloud services (Cloudinary, AWS)',
  },
  {
    iconClass: 'fa-solid fa-3x fa-cart-shopping',
    title: 'E-commerce Solutions',
    desc: 'Online store development, Shopping cart functionality, Order management system, Payment integration',
  },
  {
    iconClass: 'fa-solid fa-3x fa-chalkboard-user',
    title: 'CMS & Admin Panels',
    desc: 'Custom admin dashboard, Content management system, User role management, Analytics dashboard',
  },
  {
    iconClass: 'fa-solid fa-3x fa-screwdriver-wrench',
    title: 'Maintenance & Support',
    desc: 'Bug fixing & debugging, Performance optimization, Security updates, 24/7 technical support',
  },
  {
    iconClass: 'fa-solid fa-3x fa-cloud-arrow-up',
    title: 'DevOps & Deployment',
    desc: 'Application deployment (Vercel, Netlify, Heroku), CI/CD pipeline setup, Server configuration, Domain & hosting setup',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h3 className="section-title txt_cap">services</h3>
        <div className="row justify_spc_btwn align_center services_row" style={{ flexWrap: 'wrap', gap: '30px' }}>
          {services.map((service, idx) => {
            const aos = idx === 0 ? 'zoom-in-right' : idx === 1 ? 'zoom-in-up' : 'zoom-in-left';
            return (
              <div 
                className="col_30" 
                key={service.title} 
                data-aos={aos} 
                data-aos-duration="2000"
                style={{ 
                  flex: '0 0 calc(33.333% - 30px)', 
                  maxWidth: 'calc(33.333% - 30px)',
                  marginBottom: '30px'
                }}
              >
                <div className="card" style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="card_logo" style={{ marginBottom: '20px' }}>
                    <i className={service.iconClass} />
                  </div>
                  <div className="card_text">
                    <h2 className="txt_cap" style={{ fontSize: '22px', marginBottom: '15px' }}>{service.title}</h2>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;