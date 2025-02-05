// src/App.js
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          src="/1735127467741-01.jpeg"
          alt="Annadasu Uday Kiran"
          className="profile-pic"
        />
        <h1>Annadasu Uday Kiran</h1>
        <p className="profession">Java Full Stack Developer | AI Enthusiast</p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer skilled in Java, AI integration,
          and full-stack development, focused on creating smart applications. I
          thrive in environments where I can continuously learn and grow.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Java, Spring Boot, MySQL</li>
          <li>Python, AI, NLP (Cohere AI)</li>
          <li>React, HTML, CSS, Bootstrap</li>
          <li>DevOps Basics, Maven, Eclipse</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul className="projects-list">
          <li>MyDiary Project - Java Spring Boot & MySQL</li>
          <li>AIML Medical Chatbot - Symptom Assessment</li>
          <li>Udays Hospital Website - Health Chatbot & Appointment System</li>
          <li>UdaysAI - Tech Support Chatbot using NLP</li>
        </ul>
      </section>

      <section id="contact" className="section">
  <h2>Contact</h2>
  <p>Email: udaykiranannadasu@gmail.com</p>
  <p>Phone: +91-9652341926</p>
  <div className="download-btn-container">
    <a href="/hiremeuday (2).pdf" download="Annadasu_Uday_Kiran_Resume.pdf">
      <button className="download-btn">Download Resume</button>
    </a>
  </div>
</section>

      <footer className="footer">
        <p>© 2025 Annadasu Uday Kiran. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
