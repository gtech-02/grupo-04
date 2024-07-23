import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx"
import { produto } from '../Product';

export default function ProducListing({ quantidade }) {

    let cards = [];
    for (let i = 0; i < quantidade; i++) {
        cards.push(
            <Card produto={produto[i]} />
        );
    }

    return <div className="row container mx-auto justify-content-center">{cards}</div>

}

