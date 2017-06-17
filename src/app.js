import React from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import MainSection from './components/MainSection';
import Slider from './components/Slider';
import Footer from './components/Footer';
import searchIcon from './img/searchIcon.png';
import '../sass/index.scss';

export default function App() {
  return (
    <div>
      <NavBar bgImg={searchIcon} />
      <div className="body-wrapper">
        <div className="container">
          <Jumbotron />
          <MainSection />
          <Slider />
        </div>
        <Footer />
      </div>
    </div>
  );
}
