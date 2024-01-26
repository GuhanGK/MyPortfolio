import React from 'react';
import './App.css';
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import MyWork from './Components/Pages/MyWork';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id='mywork'>
        <MyWork />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
