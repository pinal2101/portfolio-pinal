import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Concatstring Solutions Private Limited",
      period: "December 2024 - April 2026",
      description: [
        "Developed and optimized responsive web applications using React.js, Next.js, Node.js",
        "Built RESTful APIs for CRUD applications, integrated Redux Toolkit for state management",
        "Implemented file upload (Cloudinary) and JWT authentication systems",
        "Collaborated using Git/GitHub, deployed applications on Vercel, Netlify, Render",
        "Enhanced UI with MUI, Tailwind CSS — mobile responsive & cross-browser compatible"
      ]
    },
    {
      title: "MERN Stack Developer Intern",
      period: "Completed Internship",
      description: [
        "Developed and optimized responsive web apps using React.js, Next.js, Node.js",
        "Built RESTful APIs for CRUD apps, integrated Redux Toolkit for state management",
        "Implemented file upload (Cloudinary) and JWT authentication",
        "Collaborated using Git/GitHub, deployed apps on Vercel, Netlify, Render"
      ]
    },
    {
      title: "Supabase Integrated Projects",
      period: "Project Experience",
      description: [
        "Created and managed tables in Supabase (PostgreSQL), applied RLS policies",
        "Integrated Supabase with React/Next.js, performed CRUD operations"
      ]
    }
  ];

  const education = [
    { degree: "Master of Computer Applications (MCA)", institution: "Silver Oak University", year: "2023–2025", grade: "A+" },
    { degree: "Bachelor of Science (BSc Mathematics)", institution: "Pramukh Swami Science College", year: "2019–2022", grade: "B" },
    { degree: "12th (GHSEB)", institution: "GHSEB", year: "2019", grade: "B" },
    { degree: "10th (GSEB)", institution: "GSEB", year: "2017", grade: "B" }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '1rem', color: '#e0e0ff' }}><i className="fas fa-briefcase"></i> Work Experience</h3>
            <div className="timeline-grid">
              {experiences.map((exp, idx) => (
                <div className="exp-card" key={idx}>
                  <h3>{exp.title}</h3>
                  {exp.company && <div style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '0.4rem' }}>{exp.company}</div>}
                  <div className="exp-meta">{exp.period}</div>
                  <div className="exp-desc">
                    {exp.description.map((item, i) => <div key={i}>• {item}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '1rem', color: '#e0e0ff' }}><i className="fas fa-graduation-cap"></i> Education</h3>
            <div className="timeline-grid">
              {education.map((edu, idx) => (
                <div className="edu-card" key={idx}>
                  <h3>{edu.degree}</h3>
                  <div className="edu-meta">{edu.institution} | {edu.year} | Grade: {edu.grade}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
