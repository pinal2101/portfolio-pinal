import React from 'react';

const items = [
  {
    title: '1. Master of Science in Information Technology ( MSc IT)',
    place: 'Silver Oak University (Ahmedabad)',
    duration: '2023–2025',
  },
  {
    title: '2. Bachelor of Science (BSc Mathematics)',
    place: 'Pramukh Swami Science College',
    duration: '2019–2022',
  },
];

const Education = () => {
  return (
    <section className="edu" id="education">
      <div className="container">
        <h3 className="section-title txt_cap">My Educational Qualification</h3>
        <div className="row justify_center edu_row" style={{ flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          {items.map((it, idx) => (
            <div className="col_40" key={idx} data-aos="zoom-in" data-aos-duration="1200" style={{ width: '100%', maxWidth: '400px', margin: '0' }}>
              <div className="edu-box" style={{ 
                padding: '20px', 
                minHeight: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <p className="txt_cap edu-box-title" style={{ fontSize: '16px', marginBottom: '10px' }}>{it.title}</p>
                <h3 className="text_cap" style={{ fontSize: '18px', marginBottom: '15px' }}>{it.place}</h3>
                <button type="button" className="edu-duration-btn" style={{ 
                  padding: '8px 15px', 
                  fontSize: '14px',
                  alignSelf: 'flex-start',
                  borderRadius: '20px'
                }}>
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

export default Education;