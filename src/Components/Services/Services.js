import React from "react";
import styles from "./Services.module.css";
import development from '../../images/web_design_icon.png';
import photography from '../../images/photography_icon.png';
import management from '../../images/creativity_icon.png';
import advetising from '../../images/advetising_icon.png';
import rainbow from '../../images/rainbow.png';
import interasia from '../../images/interasia.png';
import nadia from '../../images/nadia.png';
import blessed from '../../images/blessed.png';
import xiangclub from '../../images/xiangclub.png';

const Services = () => (
  <div className={styles.services}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <h2>Services</h2>
      </div>
      <div className={styles.title}><h3>My <span>Services</span></h3></div>
      <div className={styles.service}>
        <div className={styles.item}><div className={styles.development}><img src={development} alt="" /></div><h4>Development</h4>
          <p>Build Your Own Site. Create Your Own Web Page. Supported by excellent Template&Frontend Framework </p></div>
        <div className={styles.item}><div className={styles.photography}><img src={photography} alt="" /></div><h4>Photography</h4>
          <p>Provide High Quality Website Photograph, High definition camera, professional Photographers</p></div>
        <div className={styles.item}><div className={styles.management}><img src={management} alt="" /></div><h4>Management</h4>
          <p>Website cloud deployment, website server maintenance based on Amazon web service host</p></div>
        <div className={styles.item}><div className={styles.advetising}><img src={advetising} alt="" /></div><h4>Advetising</h4>
          <p>Search engine optimization, search Ads on Google, FaceBook, LinkedIn, Twitter development</p></div>
      </div>
      <div className={styles.clients}><h3>Clients</h3></div>
      <div className={styles.clientsList}>
        <div className={styles.item}><img src={xiangclub} alt="" /></div>
        <div className={styles.item}><img src={interasia} alt="" /></div>
        <div className={styles.item}><img src={nadia} alt="" /></div>
        <div className={styles.item}><img src={blessed} alt="" /></div>
      </div>
      <div className={styles.clientsList}>
        <div className={styles.item}><img src={rainbow} alt="" /></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>

    </div>
  </div>
);

export default Services;