import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const words = ["CREATIVE", "INNOVATIVE", "MODERN", "STUNNING"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Typewriter effect
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentWord.length) {
          setTypewriterText(currentWord.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentWord.slice(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
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

  const handleImageHover = () => {
    if (imageRef.current) {
      imageRef.current.style.transform += ' scale(1.05) rotate(2deg)';
    }
  };

  const handleImageLeave = () => {
    if (imageRef.current) {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      imageRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1) rotate(0deg)`;
    }
  };

  return (
    <section id="home" className={styles.container} ref={containerRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.floatingParticles}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle}
              style={{
                '--delay': `${i * 0.2}s`,
                '--duration': `${3 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.leftContainer}>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>✨</span>
          <span>CREATIVE DESIGNER</span>
          <div className={styles.badgeGlow}></div>
        </div>
        
        <h1 className={styles.mainHeading}>
          <span className={styles.staticText}>WE ARE </span>
          <span className={styles.typewriterContainer}>
            <span className={styles.typewriterText} style={{ color: '#45CAC0' }}>
              {typewriterText}
              <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
            </span>
          </span>
          <br />
          <span className={styles.staticText}>DESIGNERS</span>
        </h1>
        
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerGlow}></div>
        </div>
        
        <p className={styles.description}>
          We specialize in crafting <span className={styles.highlight}>visually captivating</span> and 
          user-friendly designs. Our team combines <span className={styles.highlight}>innovation</span> with 
          practicality to deliver high-quality web and app designs tailored to your needs.
        </p>

        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>
            <span>Get Started</span>
            <div className={styles.btnRipple}></div>
          </button>
          <button className={styles.secondaryBtn}>
            <span>View Portfolio</span>
            <div className={styles.btnGlow}></div>
          </button>
        </div>

        <div className={styles.socialProof}>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>300+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Years</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}></div>
          <img 
            ref={imageRef}
            src={getImageUrl("home/home.jpg")} 
            alt="Creative Design" 
            className={styles.heroImage}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.playButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.14v13.72L19 12L8 5.14z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className={styles.decorativeElements}>
            <div className={styles.floatingIcon} style={{'--delay': '0s'}}>🎨</div>
            <div className={styles.floatingIcon} style={{'--delay': '1s'}}>✨</div>
            <div className={styles.floatingIcon} style={{'--delay': '2s'}}>🚀</div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </div>
    </section>
  );
};

export default Home;