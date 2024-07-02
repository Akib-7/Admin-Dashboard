import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div classnam={styles.logo}>Akib</div>
      <div classnam={styles.text}> © All rights reserved</div>
    </div>
  );
}

export default Footer;
