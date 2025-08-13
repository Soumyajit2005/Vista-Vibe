import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h3>CONTACT US</h3>
      <div className={styles.form}>
        <form action="">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="name" required />

          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
