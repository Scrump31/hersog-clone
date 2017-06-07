import React from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import MainSection from './components/MainSection';
import Slider from './components/Slider';
import Footer from './components/Footer';

import '../sass/index.scss';

export default function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <MainSection />
      <Slider />
      <Footer />
    </div>
  );
}
