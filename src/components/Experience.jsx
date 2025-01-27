import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Coding Thinker",
      role: "SDE Intern",
      location: "Bhopal, MP",
      duration: "July 2023 – April 2024",
      description: "I immersed myself in the world of software development, specializing in Java with a focus on data structures. Throughout my tenure, I actively engaged in a comprehensive curriculum that encompassed various programming languages and technologies.",
      achievements: [
        "Proficiency in Java with Data Structures: Developed a strong command over Java programming language and its application in data structure implementations.",
        "Full-Stack Web Development/MERN: Gained hands-on experience in web development technologies including HTML, CSS, JavaScript, MySQL and MERN (MongoDB, Express.js, React.js, Node.js) stack",
        "Project Experience: Successfully completed multiple projects demonstrating proficiency in diverse technologies, showcasing practical applications of HTML, CSS, JavaScript, MERN (MongoDB, Express.js, React.js, Node.js) stack."
      ]
    },
    {
      company: "Oasis Infobyte",
      role: "Java Developer Intern",
      duration: "December 2023 – January 2024",
      description: "I embarked on an intensive journey into software development, specializing in core Java programming. Within a brief yet productive tenure, I spearheaded the development of several notable projects: Crafted the Java-based ATM Interface system, Number Guessing Game, Online Exam System"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Experience</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="experience-grid"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="experience-card"
            >
              <div className="card-content">
                <div className="card-header">
                  <div className="header-main">
                    <h3>{exp.company}</h3>
                    <span className="role">{exp.role}</span>
                    {exp.location && (
                      <div className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="duration">
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="description">{exp.description}</p>

                {exp.achievements && (
                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>
                          <span className="bullet"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
