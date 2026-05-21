import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },  // Fixed capitalization
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },   // Fixed capitalization
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this based on your header height
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header
      setSticky(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map((n) => n.id);
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header" className={`main-header ${sticky ? 'menu-fixed' : ''}`}>
      <div className="container">
        <div className="row align_center justify_spc_btwn nav">
          <div 
            className="logo logo_text" 
            onClick={() => scrollToSection('home')} 
            role="button" 
            tabIndex={0} 
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
          >
            Pinal
          </div>

          <button
            type="button"
            id="menu"
            className="menu"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
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