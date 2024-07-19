import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';




const Section = ({ title, titleAlign = 'left', link, children }) => (
  <div class="section-container">
  <div class="section-header center"> 
      <h2 class="section-title center">Seção de Produtos</h2>
      <a href="https://example.com" class="section-link">Show More</a>
  </div>
  <div class="section-content">
  {children}
  </div>
</div>
);
  
  export default Section;