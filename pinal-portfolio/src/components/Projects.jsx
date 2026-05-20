// import React, { useEffect, useMemo, useState } from 'react';

// const projects = [
//   {
//     category: 'web',
//     title: 'MERN Stack Portfolio',
//     href: '#',
//     image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf26?w=600&h=400&fit=crop',
//     laptop: false,
//   },
//   {
//     category: 'web',
//     title: 'Restaurant / Food UI',
//     href: 'https://github.com/',
//     image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
//     laptop: false,
//   },
//   {
//     category: 'web',
//     title: 'Gym Landing Page',
//     href: 'https://github.com/',
//     image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
//     laptop: false,
//   },
//   {
//     category: 'ui',
//     title: 'Dashboard Concept (Figma)',
//     href: 'https://www.figma.com/',
//     image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
//     laptop: false,
//   },
//   {
//     category: 'ui',
//     title: 'Mobile App UI',
//     href: 'https://www.figma.com/',
//     image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
//     laptop: false,
//   },
//   {
//     category: 'ui',
//     title: 'E‑commerce Redesign',
//     href: 'https://www.figma.com/',
//     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
//     laptop: false,
//   },
// ];

// const Projects = () => {
//   const [filter, setFilter] = useState('web');

//   const visible = useMemo(() => projects.filter((p) => p.category === filter), [filter]);

//   useEffect(() => {
//     const aos = typeof window !== 'undefined' ? window.AOS : null;
//     if (aos) aos.refresh();
//   }, [filter]);

//   return (
//     <section className="projects" id="projects">
//       <div className="container">
//         <div className="projects_heading">
//           <h3 className="section-title">My Work</h3>
//         </div>

//         <div className="project-filters">
//           <button
//             type="button"
//             className={`project-filter-btn ${filter === 'ui' ? 'active' : ''}`}
//             onClick={() => setFilter('ui')}
//           >
//             Ui/Ux Designs
//           </button>
//           <button
//             type="button"
//             className={`project-filter-btn ${filter === 'web' ? 'active' : ''}`}
//             onClick={() => setFilter('web')}
//           >
//             Web Design
//           </button>
//         </div>

//         <div className="row row-gap projects_grid">
//           {visible.map((p, idx) => (
//             <div
//               className={`col_30 flip ${p.category === 'ui' ? 'ui-ux' : 'web-design'}`}
//               key={`${filter}-${idx}`}
//               data-aos="zoom-in"
//               data-aos-duration="1200"
//             >
//               <div className="project_card">
//                 <div className="front">
//                   <img className="img_100 project-thumb" src={p.image} alt="" loading="lazy" />
//                 </div>
//                 <div className="back">
//                   <div className="project_info">
//                     <a target="_blank" rel="noopener noreferrer" className="txt_cap project_link" href={p.href}>
//                       {p.title}
//                       <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
