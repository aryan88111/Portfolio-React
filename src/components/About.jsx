import React from 'react';
import '../styles/About.css';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              

Enthusiastic and results-oriented Computer Science undergraduate skilled in Java, MERN stack development, and problem-solving.

Adept at designing, developing, and optimizing scalable web applications and software solutions.
solved over 700+ DSA problems

            </p>
            <p>
              My technical expertise includes:
            </p>
            <ul className="skills-list">
              <li>Programming: Java, C++, Data Structures and Algorithms</li>
              <li>Frontend: React.js, HTML5, CSS3, JavaScript, Bootstrap</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Databases: MongoDB, MySQL</li>
              <li>Tools: Git, GitHub, VS Code, Postman, NetBeans,Eclipse, IntelliJ IDEA</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">GFG DSA Problems Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5th</span>
              <span className="stat-label">Rank on GFG (University)</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
