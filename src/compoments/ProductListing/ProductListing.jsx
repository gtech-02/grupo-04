import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx"

export default function ProducListing({ quantidade }){
    const produto = [
        {
            img: "product-image-6.png",
            name: "Tênis K-Swiss V8",
            category: "Tênis",
            oldprice: 400,
            price: 300
        },
        {
            img: "product-image-6.png",
            name: "Camisa Nike",
            category: "Camisa",
            oldprice: 500,
            price: 400
        },
        {
            img: "product-image-6.png",
            name: "Tênis Adidas",
            category: "Tênis",
            oldprice: 600,
            price: 500
        },
        {
            img: "product-image-6.png",
            name: "Camisa Puma",
            category: "Camisa",
            oldprice: 400,
            price: 300
        },
        {
            img: "product-image-6.png",
            name: "Tênis Reebok",
            category: "Tênis",
            oldprice: 500,
            price: 400
        },
        {
            img: "product-image-6.png",
            name: "Camisa Under Armour",
            category: "Camisa",
            oldprice: 600,
            price: 500
        },
        {
            img: "product-image-6.png",
            name: "Tênis New Balance",
            category: "Tênis",
            oldprice: 400,
            price: 300
        },
        {
            img: "product-image-6.png",
            name: "Camisa Asics",
            category: "Camisa",
            oldprice: 500,
            price: 400
        }
    ];


let cards = [];
for (let i=0; i<quantidade; i++) {
    cards.push(   
        <Card produto={produto[i]} />
    );
}

return <div className = "row container mx-auto justify-content-center">{cards}</div>

}
