import React from "react";
import './discount.css';

const Discount = ({ desconto }) => {
    const isInvalidDiscount = desconto < 1 || desconto > 99;

    return (
        <>
            {isInvalidDiscount ? (
                <a href="#" className="btn btn-danger position-absolute top-0 start-0">Error</a>
            ) : (
                <a href="#" className="btn btn-yellow position-absolute top-0 start-0">{desconto}% OFF</a>
            )}
        </>
    );
}

export default Discount;