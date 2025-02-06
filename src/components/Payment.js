import React from 'react';
import './Payment.css';  // Import the CSS
import QR from '../assets/images/QR.png';

const Payment = () => {
  return (
    <div className="payment-wrapper">
      <section id="payment">
        <h2>Payment</h2>
        <p>Paytm Number: +91-XXXXXXXXXX</p>
        <p>PhonePe Number: +91-XXXXXXXXXX</p>
        <p>Google Pay Number: +91-XXXXXXXXXX</p>
        <img src={QR} alt="QR Code" />
      </section>
    </div>
  );
};

export default Payment;
