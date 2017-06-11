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
      <div className="nav-wrapper">
        <div className="container">
          <div className="logo">HERSOG</div>
          <button onClick={this.toggleNav} className="dropbtn ">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>

        <div className="dropdown">
          <ul className="dropdown-content">
            <li><a href="">ABOUT US</a></li>
            <li><a href="">PROJECTS</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">PUBLICATIONS</a></li>
            <li><a href="">CAREERS</a></li>
          </ul>
        </div>

        <div className="nav-searchbar">
          <input placeholder="SEARCH" /><i className="fa fa-search" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
