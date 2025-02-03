import React from 'react';
import './About.css';
import phoneIcon from '../assets/phone.png';
import whatsapp from '../assets/whatsapp.jpg';
import direction from '../assets/direction.png';
import mail from '../assets/mail.png';
import Logo from '../assets/images/logo.webp';
const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      <img src={Logo} alt="Sagar Dairy" className="about-logo"/>
      <p>Sagar Dairy Farm</p>
      <p>Category: Dairy & Sweet</p>
      
      <ul className="horizontal-list">
        <li>
        <a href="tel:+917058453993" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
  <img src={phoneIcon} alt="Call Me" />
  <span style={{ marginTop: "5px", textAlign: "center" }}>Call Me</span>
</a>

        </li>
        <li>
        <a href="https://wa.me/917058453993" 
   target="_blank" 
   rel="noopener noreferrer" 
   style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
  <img src={whatsapp} alt="WhatsApp" />
  <span style={{ marginTop: "5px", textAlign: "center" }}>WhatsApp</span>
</a>

        </li>
        <li>
        <a href="https://maps.app.goo.gl/N3tVouYxbho5UVUW9" 
   target="_blank" 
   rel="noopener noreferrer" 
   style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
  <img src={direction} alt="Direction" />
  <span style={{ marginTop: "5px", textAlign: "center" }}>Direction</span>
</a>

        </li>
        <li>
        <a href="mailto:sagarnsonawane99@gmail.com" 
   style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
  <img src={mail} alt="Mail" />
  <span style={{ marginTop: "5px", textAlign: "center" }}>Mail</span>
</a>

        </li>
      </ul>
      <ul style={{
    listStyle: "none",
    padding: "0", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    textAlign: "center"
}}>
    <li style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <img src={direction} alt="Direction" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        <span>Find Us</span>
    </li>
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={phoneIcon} alt="Call Us" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        <span>Call Us</span>
    </li>
</ul>




    </section>

  );
};

export default About;
