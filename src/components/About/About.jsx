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
              <h3>Backend Developer</h3>
              <p>
				Experienced in  building scalable, high-performance APIs and services using .NET and Fastify. Skilled in designing RESTful endpoints, integrating SQL & NoSQL databases and implementing middleware, security and performance optimizations. Proficient in optimizing server-side logic for performance and security, with experience in Docker and cloud deployment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Specialized in .NET ecosystem</h3>
              <p>
			  	I’m a software engineer specialized in the .NET ecosystem, with experience building scalable web applications using ASP.NET Core, Entity Framework, and modern frontend frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Expert in C#, Javascript, Typescript and browser-based application development</h3>
              <p>
  				With strong expertise in JavaScript and TypeScript, I develop responsive, type-safe interfaces and integrate them seamlessly with backend APIs. My experience includes implementing real-time features with SignalR, managing data with Entity Framework Core, and following clean architecture principles to ensure maintainability and performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
