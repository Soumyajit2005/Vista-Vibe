import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <section id="about" className={styles.container}>
        <div className={styles.leftContainer}>
          <img src={getImageUrl("about/aboutBg.png")} alt="aboutBg" />
        </div>
        <div className={styles.rightContainer}>
          <h3>ABOUT US</h3>
          <h1>
            WHO WE <span>ARE?</span>
          </h1>
          <hr />
          <p>
            Hykrox is a team of creative minds driven by the passion for design
            excellence. We strive to push the boundaries of digital design with
            clean, functional code and sleek, modern aesthetics that align with
            the latest industry standards.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureHeader}>
                <img src={getImageUrl("about/cleanCode.png")} alt="cleanCode" />
                <h3>Clean Code</h3>
              </div>
              <div className={styles.featureContent}>
                <p>
                  Our projects are built on clean, efficient code, ensuring
                  optimal performance and scalability.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureHeader}>
                <img
                  src={getImageUrl("about/mordernDesign.png")}
                  alt="mordernDesign"
                />
                <h3>Modern Design</h3>
              </div>
              <div className={styles.featureContent}>
                <p>
                  We envision a digital world where design meets functionality,
                  creating seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.additionalInfo}>
        <div className={styles.infoBox}>
          <div className={styles.infoContent}>
            <img src={getImageUrl("about/project.png")} alt="project" />
            <h1 className={styles.infoHeading}>PROJECT</h1>
          </div>
          <div className={styles.infoCount}>300+</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoContent}>
            <img src={getImageUrl("about/pleasure.png")} alt="pleasure" />
            <h1 className={styles.infoHeading}>PLEASURE</h1>
          </div>
          <div className={styles.infoCount}>8.9</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoContent}>
            <img src={getImageUrl("about/customers.png")} alt="customers" />
            <h1 className={styles.infoHeading}>CUSTOMER</h1>
          </div>
          <div className={styles.infoCount}>3000+</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.infoContent}>
            <img src={getImageUrl("about/teamMembers.png")} alt="teamMembers" />
            <h1 className={styles.infoHeading}>TEAM</h1>
          </div>
          <div className={styles.infoCount}>23</div>
        </div>
      </div>
    </>
  );
};

export default About;
