import React from 'react';
import './App.css';
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
