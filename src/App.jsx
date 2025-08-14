import { useEffect, useState } from "react";
import styles from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Loading animation
    setIsLoaded(true);

    // Smooth scrolling setup
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${styles.App} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
        <div className={styles.gridPattern}></div>
      </div>
      
      <div className={styles.loadingScreen}>
        <div className={styles.loader}>
          <div className={styles.loaderText}>VISTAVIBE</div>
          <div className={styles.loaderBar}></div>
        </div>
      </div>

      <Navbar scrollY={scrollY} />
      <Home />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;