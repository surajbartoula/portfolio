import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>42 Abu Dhabi Student</h3>
              <p>
				Currently studying at 42 Abu Dhabi, a software engineering school that offers a unique curriculum based on peer-to-peer learning and project-based work. I have experience in C, C++, and web development with React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
			  All-rounder software engineer with expertise in full-stack development. I specialize in building end-to-end web applications, integrating both front-end and back-end technologies seamlessly.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Expert in C and C++</h3>
              <p>
				Since I am using C and C++ for my multiple projects in 42 Abu Dhabi, I have become an expert in these languages. I have also worked on various projects using these languages.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
