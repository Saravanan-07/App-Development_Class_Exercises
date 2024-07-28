import React from 'react';
import '../assets/css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About FitLife</h1>
      </header>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>At FitLife, our mission is to empower individuals to achieve their fitness goals through personalized training plans, comprehensive nutrition tracking, and detailed progress monitoring. We believe that fitness is not just a goal, but a lifestyle, and we are committed to helping you live your healthiest life.</p>
      </section>
      <section className="story">
        <h2>Our Story</h2>
        <p>FitLife was founded by a group of fitness enthusiasts who saw the need for a more personalized and integrated approach to fitness training. We combined our expertise in fitness, nutrition, and technology to create an app that helps users stay motivated and on track with their fitness journeys.</p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="../assets/images/member1.jpg" alt="Team Member 1"/>
            <h3>Alex Smith</h3>
            <p>Founder & Head Trainer</p>
            <p>Alex is a certified personal trainer with over 10 years of experience in the fitness industry. His passion for helping others achieve their fitness goals is the driving force behind FitLife.</p>
          </div>
          <div className="team-member">
            <img src="../assets/images/member2.jpg" alt="Team Member 2"/>
            <h3>Jamie Lee</h3>
            <p>Co-Founder & Nutrition Expert</p>
            <p>Jamie is a registered dietitian with a background in sports nutrition. She believes that proper nutrition is key to reaching fitness goals and is dedicated to providing users with the best dietary advice.</p>
          </div>
          <div className="team-member">
            <img src="../assets/images/member3.jpg" alt="Team Member 3"/>
            <h3>Taylor Johnson</h3>
            <p>Lead Developer</p>
            <p>Taylor is a software engineer with a passion for creating innovative fitness solutions. He leads the development team at FitLife, ensuring the app is both user-friendly and feature-rich.</p>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 FitLife. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
