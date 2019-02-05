import React from "react";
import styles from "./Home.module.scss";
import photo from '../../images/photo.png';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.inner}>
      <div className={styles.up}>
        <div className={styles.photo}>
          <img src={photo} alt="" />
        </div>
        <div className={styles.name}>
          <div className={styles.title}>
            <h1>Yinfei Tang</h1>
            <div className={styles.position}>Programmer</div>
            <div className={styles.social}>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.down}>
       <div className={styles.downLeft}>
       <div className={styles.aboutMe}>
         <h3>About <span>Me</span>
         </h3>
         <p>
         Hello! I’m Yinfei Tang, people call me Yin, Monash uni graduate and got my bachelor degree of computer science in 2011.
         <br />Working as a programmer now, and pursuing for a frontend developer position, 
         <br />Did several projects regarding frontend development related to most of the cutting-edge technologies 
         that we use in current for frontend development. 
         <br />Experienced in React and NodeJS.
         </p>
         </div>
         </div>
       <div className={styles.downRight}>
       <div className={styles.details}>
       <div><span>Age</span></div><div>XX</div>
       <div><span>Residence</span></div><div>Australia</div>
       <div><span>Address</span></div><div>6 Killara Street, Box Hill North, Vic 3129</div>
       <div><span>e-mail</span></div><div>istangyf@gmail.com</div>
       <div><span>Phone</span></div><div>+61425690913</div>
       </div>
       </div>
      </div>
    </div>
  </div>
);

export default Home;