import React from 'react';

const Skills = () => {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'MUI', 'Redux Toolkit'],
    backend: ['Node.js', 'Express.js', 'JWT', 'REST APIs', 'Cloudinary'],
    database: ['MongoDB', 'Mongoose', 'Supabase', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Netlify'],
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack & <span>Skills</span></h2>
        <div className="skills-wrapper">
          <div className="skills-main" data-aos="fade-right" data-aos-duration="1200">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-container">
                {skills.frontend.map((skill, idx) => (
                  <span className="skill-badge" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & Database</h3>
              <div className="skills-container">
                {[...skills.backend, ...skills.database].map((skill, idx) => (
                  <span className="skill-badge" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & DevOps</h3>
              <div className="skills-container">
                {skills.tools.map((skill, idx) => (
                  <span className="skill-badge" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="highlight-card" data-aos="fade-left" data-aos-duration="1200">
            <h3>
              <i className="fas fa-rocket"></i> Highlights
            </h3>
            <ul>
              <li>✓ Full‑stack MERN & Next.js projects</li>
              <li>✓ Supabase (PostgreSQL + RLS)</li>
              <li>✓ Authentication (JWT, Supabase Auth)</li>
              <li>✓ Responsive UI with Tailwind / MUI</li>
              <li>✓ Deployment on Vercel / Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
