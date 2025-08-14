import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
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

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
      case 'surname':
        return value.length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
    setFocusedField(null);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', surname: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@vistavibe.com',
      link: 'mailto:hello@vistavibe.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Dribbble', icon: '🎨', url: '#' }
  ];

  return (
    <section id="contact" className={styles.container} ref={containerRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
        <div className={styles.meshGradient}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeIcon}>💬</span>
            <span>CONTACT US</span>
          </div>

          <h1 className={styles.sectionTitle}>
            Let's Create Something <span className={styles.titleAccent}>Amazing</span> Together
          </h1>

          <p className={styles.sectionDescription}>
            Ready to bring your vision to life? We're here to help you create 
            exceptional digital experiences that make a lasting impact.
          </p>

          <div className={styles.contactInfo}>
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.link}
                className={styles.contactItem}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className={styles.contactIcon}>{info.icon}</div>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>{info.label}</span>
                  <span className={styles.contactValue}>{info.value}</span>
                </div>
                <div className={styles.contactGlow}></div>
              </a>
            ))}
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  style={{ '--delay': `${index * 0.1}s` }}
                  title={social.name}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <div className={styles.socialRipple}></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <p className={styles.formSubtitle}>
                We'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>
                    First Name *
                  </label>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={`${styles.input} ${focusedField === 'name' ? styles.focused : ''} ${formErrors.name ? styles.error : ''}`}
                      required 
                    />
                    <div className={styles.inputGlow}></div>
                  </div>
                  {formErrors.name && <span className={styles.errorText}>{formErrors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="surname" className={styles.label}>
                    Last Name *
                  </label>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      id="surname" 
                      name="surname" 
                      value={formData.surname}
                      onChange={handleChange}
                      onFocus={() => handleFocus('surname')}
                      onBlur={handleBlur}
                      className={`${styles.input} ${focusedField === 'surname' ? styles.focused : ''} ${formErrors.surname ? styles.error : ''}`}
                      required 
                    />
                    <div className={styles.inputGlow}></div>
                  </div>
                  {formErrors.surname && <span className={styles.errorText}>{formErrors.surname}</span>}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <div className={styles.inputWrapper}>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`${styles.input} ${focusedField === 'email' ? styles.focused : ''} ${formErrors.email ? styles.error : ''}`}
                    required 
                  />
                  <div className={styles.inputGlow}></div>
                </div>
                {formErrors.email && <span className={styles.errorText}>{formErrors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message *
                </label>
                <div className={styles.inputWrapper}>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className={`${styles.textarea} ${focusedField === 'message' ? styles.focused : ''} ${formErrors.message ? styles.error : ''}`}
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <div className={styles.inputGlow}></div>
                </div>
                {formErrors.message && <span className={styles.errorText}>{formErrors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''} ${isSubmitted ? styles.submitted : ''}`}
                disabled={isSubmitting || isSubmitted}
              >
                <span className={styles.btnText}>
                  {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                </span>
                <div className={styles.btnIcon}>
                  {isSubmitting ? '⏳' : isSubmitted ? '✅' : '🚀'}
                </div>
                <div className={styles.btnRipple}></div>
                <div className={styles.btnGlow}></div>
              </button>
            </form>

            <div className={styles.formDecoration}>
              <div className={styles.decorativeDots}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={styles.dot}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;