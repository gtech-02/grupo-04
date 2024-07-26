import React from 'react';
import './Filter.css'


const FilterGroup = ({ titulo, itens, formato, onChange }) => {
  return (
    <div>
      <h6 className='mt-3 fw-bold'>{titulo}</h6>
      <div className="form-group">
        {itens.map((item, index) => (
          <div className="form-check" key={index}>
            <input 
              type="checkbox" 
              className={`form-check-input ${formato}`} 
              id={`item-${titulo}-${index}`} 
              onChange={() => onChange(titulo, item)}
            />
            <label className="form-check-label" htmlFor={`item-${titulo}-${index}`}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;