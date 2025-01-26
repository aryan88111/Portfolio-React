import React from 'react';
import '../styles/Skills.css';

export const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", level: 90 },
      { name: "C++", level: 85 },
      { name: "Data Structures", level: 90 },
      { name: "OOPs", level: 85 }
    ],
    "Web Development": [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 }
    ],
    "Databases & Tools": [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "NetBeans", level: 75 },
      { name: "Postman", level: 85 }
    ],
    "Soft Skills": [
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Leadership", level: 80 },
      { name: "Time Management", level: 85 },
      { name: "Problem Solving", level: 90 }
    ]
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
