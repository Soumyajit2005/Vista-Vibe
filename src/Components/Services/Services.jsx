import React, { useEffect, useRef, useState } from 'react';
import styles from "./Services.module.css";
import { getImageUrl } from "../../utils";

const Services = () => {
  const containerRef = useRef(null);
  const [animatedCards, setAnimatedCards] = useState([]);

  const services = [
    {
      id: 'website',
      icon: 'websiteDesign.png',
      title: 'Website Design',
      description: 'We create responsive, visually appealing websites tailored to your brand.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
      id: 'mobile',
      icon: 'appDesign.png',
      title: 'Mobile & Desktop App',
      description: 'We develop intuitive, high-performance apps for mobile and desktop platforms.',
      features: ['Cross Platform', 'Native Performance', 'User Friendly']
    },
    {
      id: 'uiux',
      icon: 'uiux.png',
      title: 'UI & UX Design',
      description: 'We design user-friendly, visually striking interfaces for all devices.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 'editing',
      icon: 'editing.png',
      title: 'Photo Editing',
      description: 'We enhance photos to look polished and professional for digital use.',
      features: ['Color Correction', 'Retouching', 'Creative Effects']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            
            // Trigger card animations with stagger
            const cards = entry.target.querySelectorAll(`.${styles.serviceCard}`);
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles.cardAnimate);
                setAnimatedCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="services" className={styles.container} ref={containerRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      <div className={styles.leftContainer}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgeIcon}>🚀</span>
          <span>OUR SERVICES</span>
        </div>
        
        <h1 className={styles.sectionTitle}>
          WHAT WE <span className={styles.titleAccent}>DO?</span>
        </h1>
        
        <div className={styles.titleUnderline}>
          <div className={styles.underlineFill}></div>
        </div>
        
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            At Hykrox, we offer a wide range of design services aimed at enhancing your online presence. 
            Whether it's a complete website overhaul or a new mobile app, we're dedicated to providing 
            solutions that align with your business goals.
          </p>
          <p className={styles.description}>
            We craft tailored digital solutions, working closely with clients to bring their vision to life 
            with creative, user-focused designs for websites and apps.
          </p>
        </div>

        <button 
          className={styles.viewAllBtn}
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>VIEW ALL SERVICES</span>
          <div className={styles.btnIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.btnRipple}></div>
        </button>

        <div className={styles.serviceStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Projects Done</span>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`${styles.serviceCard} ${styles[`card${index + 1}`]}`}
              onMouseMove={handleCardHover}
              style={{ '--card-index': index }}
            >
              <div className={styles.cardBackground}></div>
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <img 
                    src={getImageUrl(`services/${service.icon}`)} 
                    alt={service.title}
                    className={styles.serviceIcon}
                  />
                  <div className={styles.iconGlow}></div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <div className={styles.featureList}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.feature}>
                      <div className={styles.featureIcon}>✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button 
                  className={styles.learnMoreBtn}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Learn More</span>
                  <div className={styles.btnArrow}>→</div>
                </button>
              </div>

              <div className={styles.cardHoverEffect}></div>
              <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.decorativeElements}>
        <div className={styles.floatingIcon} style={{'--delay': '0s'}}>💡</div>
        <div className={styles.floatingIcon} style={{'--delay': '2s'}}>🎯</div>
        <div className={styles.floatingIcon} style={{'--delay': '4s'}}>⚡</div>
      </div>
    </section>
  );
};

export default Services;