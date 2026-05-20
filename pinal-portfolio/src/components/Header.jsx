import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'my work' },
  { id: 'contact', label: 'contact' },
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50);
      const sections = navItems.map((n) => n.id);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="main-header" className={`main-header ${sticky ? 'menu-fixed' : ''}`}>
      <div className="container">
        <div className="row align_center justify_spc_btwn nav">
          <div className="logo logo_text" onClick={() => scrollToSection('home')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}>
            PP
          </div>

          <button
            type="button"
            id="menu"
            className="menu"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={`fa-solid fa-2x ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>

          <nav className={menuOpen ? 'active' : ''}>
            <ul className="navbar">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
