import React from 'react';
import '../styles/App.scss'; // Make sure to create this CSS file for styling

const skills = [
    { title: 'React', description: 'A JavaScript library for building user interfaces.' },
    { title: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
    { title: 'Vue.js', description: 'A progressive framework for building user interfaces.' },
    { title: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 engine.' },
    { title: 'Express.js', description: 'A minimal and flexible Node.js web application framework.' },
    { title: 'MongoDB', description: 'A NoSQL database for modern applications.' },
    { title: 'PostgreSQL', description: 'An open-source relational database management system.' },
    { title: 'Git', description: 'A version control system for tracking changes in source code.' },
    { title: 'Docker', description: 'A platform for developing, shipping, and running applications.' },
    { title: 'CI/CD', description: 'Continuous Integration and Continuous Deployment practices.' }
  ];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Santosh Kumar Ojha</h1>
        <p>Fullstack JavaScript Engineer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Santosh Kumar Ojha, a Fullstack JavaScript Engineer with over 9 years of web development experience. 
          Currently, I'm working at AKQA in India, where I've been for the past 2 years. My expertise spans across 
          both frontend and backend technologies, and I'm proficient in all major JavaScript frameworks.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>AKQA, India</h3>
            <p><strong>Position:</strong> Fullstack JavaScript Engineer</p>
            <p><strong>Duration:</strong> 2 years</p>
            <p>Working on cutting-edge projects involving both frontend and backend technologies.</p>
          </li>
          {/* Add more experience items here if needed */}
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Frontend Technologies: React, Angular, Vue.js</li>
          <li>Backend Technologies: Node.js, Express.js</li>
          <li>Databases: MongoDB, PostgreSQL</li>
          <li>Other: Git, Docker, CI/CD</li>
        </ul>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Santosh Kumar Ojha, a Fullstack JavaScript Engineer with over 9 years of web development experience. 
          Currently, I'm working at AKQA in India, where I've been for the past 2 years. My expertise spans across 
          both frontend and backend technologies, and I'm proficient in all major JavaScript frameworks.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>AKQA, India</h3>
            <p><strong>Position:</strong> Fullstack JavaScript Engineer</p>
            <p><strong>Duration:</strong> 2 years</p>
            <p>Working on cutting-edge projects involving both frontend and backend technologies.</p>
          </li>
          {/* Add more experience items here if needed */}
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="social">
        <h2>Connect with Me</h2>
        <div className="social-buttons">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          <a href="https://linkedin.com/in/santosh-kumar-ojha" target="_blank" rel="noopener noreferrer" className="button">LinkedIn</a>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="button">Twitter</a>
          <a href="https://www.medium.com/@your-medium-profile" target="_blank" rel="noopener noreferrer" className="button">Medium</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Santosh Kumar Ojha. All rights reserved.</p>
      </footer>

      <footer className="footer">
        <p>Connect with me on <a href="https://www.linkedin.com/in/santosh-kumar-ojha" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>&copy; {new Date().getFullYear()} Santosh Kumar Ojha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
