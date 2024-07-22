import React, { useState } from 'react';
import './productDetails.css';
import tenislaranja from '../../../public/produc-image-5.jpeg'



const ProductDetails = () => {
 
  
  return (
    <div className="product-container">
      <div></div>
      <div className="product-image">
        <img src={tenislaranja} alt="Produto" />
      </div>
      <div className="product-details">
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
        <h2>Casual | Nike | REF:38416711</h2>
        <div class="rating">
        <span className='estrelas'>&#9733;</span><span className='estrelas'>&#9733;</span><span className='estrelas'>&#9733;</span><span className='estrelas'>&#9733;</span><span>&#9733;</span> 
        </div>
        <div className='avaliacao'>
          <p>(90 avaliações)</p>
        </div>
        <div className="product-variations">
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
            <label>Tamanho</label>
            <div className='button-tamanhos'>
              <button>39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
              <button>43</button>
              </div>
          </div>
          <div className="variation">
            <label>Cor</label>
            <div>
            <button class="button button-1"></button>
            <button class="button button-2"></button>
            <button class="button button-3"></button>
            <button class="button button-4"></button>
            <button class="button button-5"></button>
            </div>
          </div>
        </div>
        <button className="add-to-cart">COMPRAR</button>
      </div>
    </div>
  )};

  export default ProductDetails
