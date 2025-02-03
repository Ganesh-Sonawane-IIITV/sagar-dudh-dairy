import React from 'react';
import QR from '../assets/images/QR.png'
const Payment = () => {
  return (
    <section 
      id="payment" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '20px' 
      }}
    >
      <h2>Payment</h2>
      <p>Paytm Number: +91-XXXXXXXXXX</p>
      <p>Phone Pe Number: +91-XXXXXXXXXX</p>
      <p>Google Pay Number: +91-XXXXXXXXXX</p>
      <img 
        src={QR} 
        alt="QR Code" 
        style={{ width: '500px', height: 'auto', marginTop: '20px' }} 
      />
    </section>
  );
};

export default Payment;
