import React from 'react';
import Cowmilk from '../assets/Cow’s Milk.png'
import Buffalomilk from '../assets/Buffalo Milk.png'


const Products = () => {
  return (
    <section id="products" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>Our Products</h2>
      <div className="product-grid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="product" style={{ marginBottom: '20px' }}>
          <img src={Cowmilk} alt="Product 1" style={{ width: '500px', height: 'auto' }} />
          <p style={{ marginRight: '10px' }}>Cow's Milk</p>
  <a 
    href="https://wa.me/917058453993" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      padding: '10px 20px',
      backgroundColor: '#25D366', 
      color: 'white', 
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '16px'
    }}
  >
    Enquiry
  </a>
        </div>
        <div className="product">
          <img src={Buffalomilk} alt="Product 2" style={{ width: '500px', height: 'auto' }} />
          <p>Buffalo's Milk</p>
          <a 
    href="https://wa.me/917058453993" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#25D366', 
      color: 'white', 
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '16px'
    }}
  >
    Enquiry
  </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
