import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>CONTACT US</h3>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required 
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="surname" className={styles.label}>Surname</label>
          <input 
            type="text" 
            id="surname" 
            name="surname" 
            value={formData.surname}
            onChange={handleChange}
            className={styles.input}
            required 
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required 
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </div>

        <button type="submit" onClick={handleSubmit} className={styles.submitBtn}>
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default Contact;