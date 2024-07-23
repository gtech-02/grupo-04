import React from 'react';
import './Section.css';




const Section = ({ title, titleAlign = 'left', link, linkText, children }) => (
  <div class="section-container">
    <div class="section-header center">
      <h2 class="section-title center">{title}</h2>
      <a href="https://example.com" class="section-link">{linkText}</a>
    </div>
    <div class="section-content">
      {children}
    </div>
  </div>
);

export default Section;