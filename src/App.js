import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Payment from './components/Payment';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Products />
      <Payment />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;