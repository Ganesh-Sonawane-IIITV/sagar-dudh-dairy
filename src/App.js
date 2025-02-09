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

      <Home />
      <About/>
      <Products />
      <Payment />
      <Feedback />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;