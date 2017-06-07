import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor() {
    super();
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    document.querySelector('.dropdown-content').classList.toggle('show');
    document.querySelector('.dropbtn').classList.toggle('rotate');
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="logo">HERSOG</div>
          <button onClick={this.toggleNav} className="dropbtn ">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>

        <div className="dropdown">
          <ul className="dropdown-content">
            <li><a href="">About Us</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Publications</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
