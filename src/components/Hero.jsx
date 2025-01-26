import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import myImage from '../MyInfo/img.png';
import Background3D from './Background3D';

export const Hero = () => {
  const titles = [
    'Software Developer',
    'Full Stack Developer',
    'MERN Developer',
    'Frontend Developer',
    'Backend Developer',
    'CS Student',
  ];
  
  const titleRef = useRef(null);
  const currentTitleIndex = useRef(0);

  useEffect(() => {
    const animateTitle = () => {
      if (titleRef.current) {
        titleRef.current.classList.add('fade-out');
        // 
        setTimeout(() => {
          currentTitleIndex.current = (currentTitleIndex.current + 1) % titles.length;
          if (titleRef.current) {
            titleRef.current.textContent = titles[currentTitleIndex.current];
            titleRef.current.classList.remove('fade-out');
            titleRef.current.classList.add('fade-in');
          }
        }, 400);

        setTimeout(() => {
          if (titleRef.current) {
            // titleRef.current.classList.remove('fade-in');
          }
        }, 1200);
      }
    };

    const intervalId = setInterval(animateTitle, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="hero">
      <Background3D />
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hi there! I'm</span>
          <h1>Aryan Gautam</h1>
          <div className="title-container">
            <h2 ref={titleRef} className="animated-title">
              {titles[0]}
            </h2>
          </div>
          <p>
            Software Developer specializing in MERN Stack and Java Development
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="https://drive.google.com/drive/folders/1OXxhPdUS6HGHbajGrk-dgcCg4flHQ1gL?usp=sharing" className="btn btn-secondary">
              Resume
            </a>
          </div>
        </div>
        <img src={myImage} alt="Aryan Gautam" className="hero-image" />
      </div>
    </section>
  );
};
