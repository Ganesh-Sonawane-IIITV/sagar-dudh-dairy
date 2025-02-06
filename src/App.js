import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Payment from './components/Payment';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Products />
      <Payment />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;