import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const OrderDropdown = ({ onOrderChange }) => {
  const [selectedOption, setSelectedOption] = useState('Mais relevantes');

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    onOrderChange(eventKey);
  };

  return (
    <div className="d-flex align-items-center p-3" style={{ marginLeft: '-20px', marginBlock: '20px' }}>
      <strong className="me-2">Ordenar por:</strong>
      <DropdownButton
        id="dropdown-order"
        title={selectedOption}
        variant="outline-secondary"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Mais relevantes">Mais relevantes</Dropdown.Item>
        <Dropdown.Item eventKey="Menor preço">Menor preço</Dropdown.Item>
        <Dropdown.Item eventKey="Maior preço">Maior preço</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default OrderDropdown;