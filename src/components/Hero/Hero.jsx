import React from "react";
import styles from "./Hero.module.css";
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath'; // Ensure you have maath installed for easing
import { Model } from './Model';

export const Hero = () => {
	return (
	  <section className={styles.container}>
		<div className={styles.content}>
		  <h1 className={styles.title}>Hi, I'm Suraj Bartoula</h1>
		  <p className={styles.description}>
			Proficient in C#, JavaScript, and TypeScript, leveraging frameworks such as ASP.NET Core, React, and Node.js to build high-performance, maintainable applications.
		  </p>
		  <a href="mailto:suraj_bartoula@yahoo.com" className={styles.contactBtn}>
			Contact Me
		  </a>
		</div>
		<div className={styles.canvasContainer}>
		  <Canvas shadows camera={{ position: [10, 25, 10], fov: 70 }}>
			{/* Lights */}
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 10, 5]} intensity={1} castShadow />
  
			{/* Render the 3D model */}
			<Model />
  
			{/* Camera Rig for dynamic camera movement */}
			<CameraRig />
		  </Canvas>
		</div>
		<div className={styles.topBlur} />
		<div className={styles.bottomBlur} />
	  </section>
	);
// Camera Rig for pointer-based camera control
function CameraRig() {
	useFrame((state, delta) => {
	  const { width, height } = state.viewport;
	  const x = (state.pointer.x * width) / 3;
	  const y = (state.pointer.y * height) / 2;
  
	  // Smoothly adjust camera position using easing
	  easing.damp3(state.camera.position, [-1 + x, 5 + y, 30], 0.5, delta);
  
	  // Ensure the camera looks at the center of the scene
	  state.camera.lookAt(0, 0, 0);
	});
  
	return null;
  }
};
