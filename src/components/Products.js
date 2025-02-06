import React from 'react';
import './Products.css';  // Import the CSS
import Cowmilk from '../assets/Cow’s Milk.png';
import Buffalomilk from '../assets/Buffalo Milk.png';

const Products = () => {
  return (
    <div className="products-wrapper">
      <section id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src={Cowmilk} alt="Cow's Milk" />
            <p>Cow's Milk</p>
            <a href="https://wa.me/917058453993" target="_blank" rel="noopener noreferrer">
              Enquiry
            </a>
          </div>
          <div className="product">
            <img src={Buffalomilk} alt="Buffalo's Milk" />
            <p>Buffalo's Milk</p>
            <a href="https://wa.me/917058453993" target="_blank" rel="noopener noreferrer">
              Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;