import React from 'react';

const rows = [
  [
    { label: 'Name', value: 'Pinal Prajapati' },
    { label: 'Email', value: 'pinalprajapati3543@gmail.com' },
  ],
  [
    { label: 'Birth Date', value: 'December 10, 2001' },
    { label: 'Phone', value: '+91 9586823708' },
  ],
  [
    { label: 'Location', value: 'Ahmedabad, India' },
    { label: 'LinkedIn', value: 'pinal-prajapati', href: 'https://www.linkedin.com/in/pinal-prajapati-4577272a4' },
  ],
  [
    { label: 'Freelance', value: 'Available' },
    { label: 'GitHub', value: 'Portfolio', href: 'https://github.com/' },
  ],
];

const MyBiography = () => {
  return (
    <section className="services mybio_sec" id="mybio">
      <div className="container">
        <h3 className="section-title txt_cap">My Biography</h3>
        {rows.map((pair, ri) => (
          <div className="row justify_spc_btwn bio_row" key={ri}>
            {pair.map((item) => (
              <div className="col_30" key={item.label}>
                <div className="d-flex bio-details justify_spc_btwn">
                  <p className="label-txt">{item.label}</p>
                  <p className="label-txt label-value">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBiography;