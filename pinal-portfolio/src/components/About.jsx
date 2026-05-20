import React from 'react';
import aboutPic from '../assets/images/about_pic.png'; // Adjust the path based on your folder structure

const toolIcons = [
  { icon: 'fa-brands fa-react', label: 'React' },
  { icon: 'fa-brands fa-node-js', label: 'Node' },
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-brands fa-html5', label: 'HTML5' },
  { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
  { icon: 'fa-solid fa-database', label: 'MongoDB' },
  { icon: 'fa-brands fa-bootstrap', label: 'Bootstrap' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
];

const About = () => {
  return (
    <section className="about_sec" id="about">
      <div className="container">
        <div className="row justify_spc_btwn align_center about_row">
          <div className="col_30 about_photo_wrap">
            <div className="about_photo" data-aos="fade-down" data-aos-duration="2000">
              {/* Removed about_illustration div - image directly here */}
              <img 
                src={aboutPic} 
                alt="About Pinal Prajapati" 
                className="about_image"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block'
                }}
              />
            </div>
          </div>

          <div className="col_45 about_txt_wrap" data-aos="fade-up" data-aos-duration="2000">
            <div className="about_txt">
              <h2 className="txt_up font_50 section-title-inline">
                about <span>me</span>
              </h2>
              <p>
                Hey, I&apos;m <span>Pinal</span> — a MERN stack developer with professional experience and a hunger to
                learn. I&apos;ve built and optimized dynamic web apps with React, Next.js, and Node.js.
              </p>
              <p>
                I enjoy REST APIs, JWT auth, Cloudinary uploads, and Supabase (PostgreSQL + RLS). My goal is to grow with
                a team while delivering clean, maintainable code.
              </p>

              <div className="key_skills">
                <h3 className="txt_cap">Skills</h3>
                <ul>
                  <li>
                    <strong>Frontend:</strong> Responsive UI with React, Next.js, Tailwind CSS, and MUI.
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express, REST APIs, authentication, and file uploads.
                  </li>
                  <li>Expertise in tools / languages such as :-</li>
                </ul>
              </div>
            </div>

            <ul className="tools row">
              {toolIcons.map((t, idx) => (
                <li data-aos="flip-right" data-aos-duration="1500" className="tool d_inline_blc" key={t.label}>
                  <div className="tool_icon_cell" title={t.label}>
                    <i className={t.icon} aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;