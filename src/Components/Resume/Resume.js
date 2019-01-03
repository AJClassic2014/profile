import React from "react";
import styles from "./Resume.module.css";
import MyPdfViewer from "./MyPdfViewer.js";

const Resume = () => (
  <div className={styles.resume}>
   <div className={styles.inner}>
     <div className={styles.header}>
     <h2>Resume</h2>
     </div>
     <MyPdfViewer/>
    </div>
  </div>
);

export default Resume;