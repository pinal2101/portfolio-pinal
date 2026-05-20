import React from 'react';

const jobs = [
  {
    title: 'MERN Stack Developer',
    place: 'Concatstring Solutions Private Limited (Ahmedabad)',
    duration: 'Dec 2024 – Apr 2026',
    description: 'Started as Intern, then promoted to Developer',
  },
  // {
  //   title: 'Supabase & React Projects',
  //   place: 'Personal / Learning',
  //   duration: 'Ongoing',
  // },
];

const WorkExperience = () => {
  return (
    <section className="edu" id="work">
      <div className="container">
        <h3 className="section-title txt_cap">Work experience</h3>
        <div className="row justify_center edu_row work_row">
          {jobs.map((it, idx) => (
            <div className="col_40" key={idx} data-aos="zoom-in" data-aos-duration="1200">
              <div className="edu-box">
                <p className="text_cap edu-box-title">{it.title}</p>
                <h3 className="text_cap">{it.place}</h3>
                {it.description && (
                  <p className="work-description" style={{ fontSize: '14px', margin: '8px 0', color: '#888' }}>
                    {it.description}
                  </p>
                )}
                <button type="button" className="edu-duration-btn">
                  Duration : {it.duration}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;