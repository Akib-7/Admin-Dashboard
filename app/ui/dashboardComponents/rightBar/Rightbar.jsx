import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";
function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>

        <div className={styles.text}>
          <span className={styles.notification}> Available Now</span>
          <h3 className={styles.title}>
            How to make admin dashboard on Next.js 14?
          </h3>
          <span className={styles.subtitle}>Takes 5 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum
            nobis alias. Nisi enim architecto autem similique voluptatibus
            tenetur...
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled size={20} />
            Watch
          </button>
        </div>
      </div>

      {/* Second Item Card */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>

        <div className={styles.text}>
          <span className={styles.notification}> Available Now</span>
          <h3 className={styles.title}>
            How to make admin dashboard on Next.js 14?
          </h3>
          <span className={styles.subtitle}>Takes 5 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum
            nobis alias. Nisi enim architecto autem similique voluptatibus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled size={20} />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
