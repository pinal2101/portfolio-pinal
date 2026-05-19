import React from 'react';

const Skills = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "MUI", "Redux Toolkit"],
    backend: ["Node.js", "Express.js", "JWT", "REST APIs", "Cloudinary"],
    database: ["MongoDB", "Mongoose", "Supabase", "PostgreSQL"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"]
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack & Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#e0e0ff', marginBottom: '0.8rem' }}>Frontend</h3>
            <div className="skills-container">
              {skills.frontend.map((skill, idx) => <span className="skill-badge" key={idx}>{skill}</span>)}
            </div>
            <h3 style={{ color: '#e0e0ff', marginBottom: '0.8rem', marginTop: '1.5rem' }}>Backend & Database</h3>
            <div className="skills-container">
              {[...skills.backend, ...skills.database].map((skill, idx) => <span className="skill-badge" key={idx}>{skill}</span>)}
            </div>
            <h3 style={{ color: '#e0e0ff', marginBottom: '0.8rem', marginTop: '1.5rem' }}>Tools & DevOps</h3>
            <div className="skills-container">
              {skills.tools.map((skill, idx) => <span className="skill-badge" key={idx}>{skill}</span>)}
            </div>
          </div>
          <div className="highlight-card">
            <h3 style={{ color: '#e0e0ff' }}><i className="fas fa-rocket"></i> Highlights</h3>
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