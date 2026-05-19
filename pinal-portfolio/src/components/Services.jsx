import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaLaptopCode />, title: "Web Development", desc: "End-to-end MERN stack & Next.js applications" },
    { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Mobile-first websites using Tailwind, MUI" },
    { icon: <FaDatabase />, title: "API Integration", desc: "RESTful API design, Supabase, JWT auth" }
  ];

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-flex">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              {service.icon}
              <h3>{service.title}</h3>
              <p style={{ color: '#9090b0' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;