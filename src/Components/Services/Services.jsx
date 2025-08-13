import React from 'react';
import styles from "./Services.module.css";
import { getImageUrl } from "../../utils";


const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftConatiner}>
        <h3>OUR SERVICES</h3>
        <h1>WHAT WE <span>DO?</span></h1>
        <hr />
        <p>At Hykrox, we offer a wide range of design services aimed at enhancing your online presence. Whether it's a complete website overhaul or a new mobile app, we’re dedicated to providing solutions that align with your business goals.</p>
        <p>We craft tailored digital solutions, working closely with clients to bring their vision to life with creative, user-focused designs for websites and apps.</p>
        <button>VIEW ALL</button>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightFirstContainer}>
            <div className={styles.first}>
                <img src={getImageUrl("services/websiteDesign.png")} alt="" />
                <h3>Website Design</h3>
                <p>We create responsive, visually appealing websites tailored to your brand.</p>
            </div>
            <div className={styles.second}>
                <img src={getImageUrl("services/appDesign.png")} alt="" />
                <h3>Mobile & Desktop App</h3>
                <p>We develop intuitive, high-performance apps for mobile and desktop platforms.</p>
            </div>
        </div>
        <div className={styles.rightSecondContainer}>
            <div className={styles.first}>
                <img src={getImageUrl("services/uiux.png")} alt="" />
                <h3>UI&UX Design</h3>
                <p>We design user-friendly, visually striking interfaces for all devices.</p>
            </div>
            <div className={styles.second}>
                <img src={getImageUrl("services/editing.png")} alt="" />
                <h3>Editing Photo</h3>
                <p>We enhance photos to look polished and professional for digital use.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
