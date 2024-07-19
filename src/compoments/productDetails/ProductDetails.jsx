import React, { useState } from 'react';
import './productDetails.css';
import tenislaranja from '../../../public/produc-image-5.jpeg'


//exibe os detalhes do produto
const ProductDetails = () => {
  //armazenar a cor e o tamanho selecionados
  const [color, setColor] = useState('red');
  const [size, setSize] = useState('small');

  return (
    <div className="product-container">
      {/*imagem do produto */}
      <div className="product-image">
        <img src={tenislaranja} alt="Produto" />
      </div>
      {/*detalhes do produto */}
      <div className="product-details">
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
        <h2>Casual | Nike | REF:38416711</h2>
        {/*produto (cor e tamanho) */}
        <div className="product-variations">
        {/*preço do produto */}
        <div className="product-price">
          <h1>R$ 219,00</h1>
          <p>R$ 350,00</p>
        </div>
        <div className="product-prc">
        <p>ou R$ 1789,99 em até 10x sem juros</p>
        </div>
        <div className="details">
        <p>Descrição do produto</p>
        <h2>O Tênis Masculino Nike Revolution 6 Next Nature revisita o original icônico com linhas de design modernas e amortecimento super leve. O amortecimento Air-Sole revolucionário da Nike foi introduzido nos calçados Nike em 1978.</h2>
        </div>
        <div className="variation">
            <label htmlFor="size">Tamanho:</label>
            {/*tamanho do produto */}
            <select>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
            </select>
          </div>
          <div className="variation">
            <label htmlFor="color">Cor:</label>
            {/*cor do produto */}
            <select>
              <option>Vermelho</option>
              <option>Azul</option>
              <option>Verde</option>
            </select>
          </div>
        </div>
        {/* botão de adicionar o produto ao carrinho */}
        <button className="add-to-cart">COMPRAR</button>
      </div>
    </div>
  )};

  export default ProductDetails


  