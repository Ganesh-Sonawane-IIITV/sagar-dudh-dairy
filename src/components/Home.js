import React from 'react';
import './Home.css';
import phoneIcon from '../assets/phone.png';
import whatsapp from '../assets/whatsapp.jpg';
import direction from '../assets/direction.png';
import mail from '../assets/mail.png';
import Logo from '../assets/images/logo.webp';
import phonebookIcon from '../assets/phone-book.png';  // Icon for "Add to Phonebook"
import cardIcon from '../assets/download.png';  // Icon for "Save Card"
const Home = () => {
  // Function to download contact file
  const handleDownloadContact = () => {
    const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:Sagar Sonawane
TEL:+918554940296
EMAIL:sagarnsonawane99@gmail.com
END:VCARD`;
    const blob = new Blob([vcfData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Sagar_Sonawane.vcf";
    link.click();
  };
  return (
    <div className="home-wrapper"> {/* Wrapper div added here */}
      <section id="home">
        <img src={Logo} alt="Sagar Dairy" className="home-logo" />
        {/* Colored Horizontal Line */}
        <h3>Owner</h3>
        <h3>Sagar Sonawane</h3>
        <hr className="colored-line" />
        <h2>Sagar Dairy Farm</h2>
        <h2>Category: Dairy & Sweet</h2>
        
        <ul className="horizontal-list">
          <li>
            <a href="tel:+918554940296" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
              <img src={phoneIcon} alt="Call Me" />
              <span style={{ marginTop: "5px", textAlign: "center" }}>Call Me</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/918554940296" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
              <img src={whatsapp} alt="WhatsApp" />
              <span style={{ marginTop: "5px", textAlign: "center" }}>WhatsApp</span>
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/N3tVouYxbho5UVUW9" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
              <img src={direction} alt="Direction" />
              <span style={{ marginTop: "5px", textAlign: "center" }}>Direction</span>
            </a>
          </li>
          <li>
            <a href="mailto:sagarnsonawane99@gmail.com" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}>
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
        {/* Add to Phonebook & Save Card Buttons */}
        <div className="button-container">
          <button className="custom-button" onClick={handleDownloadContact}>
            <img src={phonebookIcon} alt="Phonebook Icon" className="button-icon" />
            Add to Phonebook
          </button>

          <a href="/path-to-your-business-card.pdf" download="Sagar_Dairy_Card.pdf" className="custom-button">
            <img src={cardIcon} alt="Card Icon" className="button-icon" />
            Save Card
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;