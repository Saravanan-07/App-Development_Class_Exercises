import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <ul>
          <li><Link className='link' to='/about'>About</Link></li>
          <li><Link className='link' to='/contact'>Contact</Link></li>
          <li><Link className='link' to='/login'>Login</Link></li>
          <li><Link className='link' to='/register'>Register</Link></li>
        </ul>
      </div>
      <header className="header">
        <h1>Welcome to FitLife</h1>
        <p>Your personal gym trainer and fitness tracker</p>
        <Link className="cta-button" to='/register'>Get Started</Link>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Personalized Workouts</h3>
            <p>Get custom workout plans tailored to your fitness level and goals.</p>
          </div>
          <div className="feature-item">
            <h3>Nutrition Tracking</h3>
            <p>Track your meals and get nutritional guidance to complement your workouts.</p>
          </div>
          <div className="feature-item">
            <h3>Progress Monitoring</h3>
            <p>Monitor your progress with detailed statistics and reports.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"FitLife has transformed my fitness journey. The personalized plans are amazing!"</p>
            <p>- Alex</p>
          </div>
          <div className="testimonial-item">
            <p>"I love how easy it is to track my progress and stay motivated."</p>
            <p>- Jamie</p>
          </div>
          <div className="testimonial-item">
            <p>"The nutrition tracker is a game-changer for my diet."</p>
            <p>- Taylor</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 FitLife. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
