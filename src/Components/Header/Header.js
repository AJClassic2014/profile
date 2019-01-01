import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className={styles.bar}>
      <div className={styles.left}>
        <div className={styles.title}>Yinfei <span>Tang</span></div>
      </div>
      <div className={styles.right}>
        <ul>
          <li className={styles.item}>
            {/* <a href="#">Home</a> */}
            <Link exact="true" to="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.item}>
            {/* <a href="#">Resume</a> */}
            <Link to="/resume" className={styles.link}>Resume</Link>
          </li>
          <li className={styles.item}>
            {/* <a href="#">Services</a> */}
            <Link to="/services" className={styles.link}>Services</Link>
          </li>
          <li className={styles.item}>
            {/* <a href="#">Contact</a> */}
            <Link to="/contact" className={styles.link}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;