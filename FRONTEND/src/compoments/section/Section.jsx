import React from 'react';
import './Section.css';




const Section = ({ title, titleAlign = 'left', link, linkText, children }) => (
  <div className="section-container">
    <div className="section-header center">
      <h2 className="section-title center">{title}</h2>
      <a href="products" className="section-link">{linkText}</a>
    </div>
    <div className="section-content">
      {children}
    </div>
  </div>
);

export default Section;