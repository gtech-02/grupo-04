import React from 'react';
import './Section.css';




const Section = ({ title, titleAlign = 'left', link, children }) => (
  <div class="section-container">
    <div class="section-header center">
      <h2 class="section-title center">Produtos em alta</h2>
      <a href="https://example.com" class="section-link">Ver Todos</a>
    </div>
    <div class="section-content">
      {children}
    </div>
  </div>
);

export default Section;