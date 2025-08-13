import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <h3>CREATIVE DESIGNER</h3>
        <h1>
          WE ARE <span>CREATIVE</span>
          <br /> DESIGNERS
        </h1>
        <hr />
        <p>
          We specialize in crafting visually captivating and user-friendly
          designs. Our team combines innovation with practicality to deliver
          high-quality web and app designs tailored to your needs.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <img src={getImageUrl("home/home.jpg")} alt="home" />
      </div>
    </section>
  );
};

export default Home;
