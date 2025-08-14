import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Navbar.module.css';

const Navbar = ({ scrollY = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navheading} onClick={() => scrollToSection('home')}>
          <h1 className={styles.logo}>
            <span className={styles.logoMain}>VISTA</span>
            <span className={styles.logoAccent}>VIBE</span>
          </h1>
          <p className={styles.tagline}>unique designs</p>
          <div className={styles.logoGlow}></div>
        </div>

        <div className={styles.navContent}>
          <ul className={styles.navlinks}>
            {navItems.map((item, index) => (
              <li 
                key={item.id} 
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={styles.navLink}
                >
                  {item.label}
                  <span className={styles.navLinkGlow}></span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.searchContainer}>
            <button className={styles.searchBtn}>
              <img src={getImageUrl("nav/searchIcon.png")} alt="Search" />
              <span className={styles.searchRipple}></span>
            </button>
          </div>
        </div>

        <button 
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item, index) => (
            <li 
              key={item.id}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={activeSection === item.id ? styles.active : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.navBackground}></div>
    </nav>
  );
};

export default Navbar;