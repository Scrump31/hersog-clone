import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo-wrapper">
        <div className="logo-border-top">
          <div className="logo">HERSOG</div>
        </div>
      </div>
      <div>
        <ul className="footer-nav">
          <li><a href="">ABOUT US</a></li>
          <li><a href="">PROJECTS</a></li>
          <li><a href="">SERVICES</a></li>
          <li><a href="">PUBLICATIONS</a></li>
          <li><a href="">CAREERS</a></li>
        </ul>
      </div>
    </footer>
  );
}
