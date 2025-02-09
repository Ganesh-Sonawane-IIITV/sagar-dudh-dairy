import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <section id="about" className='back'>
        <h1>About Us</h1>
        <hr className="colored-line" />
        <div className="Company-detail">
  <p><strong>Name: </strong>Sagar Dairy</p>
  <p><strong>Category:</strong> Dairy & Sweet</p>
  <p><strong>Nature of Business:</strong> Service Provider</p>
</div>
<div className="speciality-container">
      <h3 className="speciality-heading">Our Specialities</h3>
      <ul className="specialities-list">
        <li>Complete client satisfaction</li>
        <li>Ethical business policies</li>
        <li>Live In Touch With Our Customers</li>
        <li>Transparent dealings</li>
        <li>Wide connectivity</li>
        <li>We listen, We understand, We provide solutions</li>
        <li>A great experience with Happy clients</li>
      </ul>
    </div>
        <p className="highlight-text">शुभ कार्यक्रमासाठी खवा, पनीर व ग्रीन पिस होलसेल दरात मिळेल.</p>
      </section>
    </div>
  );
};

export default About;
