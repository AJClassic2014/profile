import React from "react";
import styles from "./Contact.module.css";

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.inner}>
    <div className={styles.header}>
        <h2>Contact</h2>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
        <div className={styles.title}><h3>Get in <span>Touch</span></h3></div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4434006198085!2d145.12910931531832!3d-37.8030819797542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6475a16e7030d%3A0x5cbd986628eb5da8!2s6+Killara+St%2C+Box+Hill+North+VIC+3129!5e0!3m2!1szh-CN!2sau!4v1546500482041"></iframe>
        </div>
        <div className={styles.details}>
          <div><i class="fa fa-map-marker"></i></div><div>Melbourne, Australia</div>
          <div><i class="fa fa-envelope"></i></div><div>istangyf@gmail.com</div>
          <div><i class="fa fa-phone"></i></div><div>+61 425 690 913</div>
          <div><i class="fa fa-check"></i></div><div>Freelance Available</div>
        </div>
        </div>
        <div className={styles.contactRight}>
        <div className={styles.title}><h3>Contact <span>Form</span></h3></div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;