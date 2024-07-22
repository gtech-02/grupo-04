import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const OrderDropdown = () => {
  // Estado para armazenar a opção selecionada
  const [selectedOption, setSelectedOption] = useState('mais relevantes');

  // Manipulador para atualizar o estado quando uma nova opção é selecionada
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <div className="d-flex align-items-center p-3" style={{ marginLeft: '-25px', marginBlock: '20px' }}>
      <strong className="me-2">Ordenar por:</strong>
      <DropdownButton
        id="dropdown-order"
        title={selectedOption} // Exibe a opção selecionada
        variant="outline-secondary" // Estilo do botão
        onSelect={handleSelect} // Manipulador de seleção
      >
        <Dropdown.Item eventKey="mais relevantes">Mais relevantes</Dropdown.Item>
        <Dropdown.Item eventKey="menor preço">Menor preço</Dropdown.Item>
        <Dropdown.Item eventKey="maior preço">Maior preço</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default OrderDropdown;