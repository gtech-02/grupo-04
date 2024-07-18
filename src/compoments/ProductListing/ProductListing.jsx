import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx"



const ProducListing = () => {
    return (
    <nav class = "d-flex justify-content-center align-items-center bg-light">
        <section  class="mx-auto mt-5">
            <div class="row justify-content-center" >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </section>
    </nav>

    );
};



export default ProducListing;