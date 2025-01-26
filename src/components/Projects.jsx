import React from 'react';
import '../styles/Projects.css';

export const Projects = () => {
  const projects = [
    {
      title: "Zomato Clone",
      description: "A full-stack food delivery platform with payment gateway integration built using MERN stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      links: {
        code: ["https://github.com/aryan88111/Zomato-clone", "https://github.com/aryan88111/Zomato"]
      },
      icon: "fas fa-utensils"
    },
    {
      title: "URL Shortener",
      description: "A web application that shortens long URLs into more manageable links using MERN stack",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        code: ["https://github.com/aryan88111/URL_Shortener"]
      },
      icon: "fas fa-link"
    },
    {
      title: "ATM Interface",
      description: "A Java application simulating ATM operations with user authentication and transaction management",
      technologies: ["Core Java", "OOP", "File I/O"],
      links: {
        code: ["https://github.com/aryan88111/OasisInfobyte/blob/main/AtmInterface.java"]
      },
      icon: "fas fa-credit-card"
    },
    {
      title: "Number Guessing Game",
      description: "An interactive game built with Java Swing where players guess a randomly generated number",
      technologies: ["Java", "Swing", "GUI Programming"],
      links: {
        code: ["https://github.com/aryan88111/Calculator-Java-"]
      },
      icon: "fas fa-gamepad"
    },
    {
      title: "Property Listing site",
      description: "A modern property listing website built using the MERN stack. Features include user-friendly property searches, advanced filtering, secure authentication, and interactive property details.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST API", "MVC"],
      links: {
        code: ["https://github.com/Mohd-Shadav/MAJOR_PROJECT_MAIN/tree/backend"]
      },
      icon: "fas fa-home"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>
          <i className="fas fa-code"></i> My Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    <i className="fas fa-code-branch"></i> {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.code && project.links.code.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link}
                    className="project-link code-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(link, '_blank');
                    }}
                  >
                    <i className="fab fa-github"></i> 
                    {project.links.code.length > 1 ? `View Code ${linkIndex + 1}` : 'View Code'}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
