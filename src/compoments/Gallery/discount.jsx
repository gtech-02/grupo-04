import React from "react";
import './discount.css';

const Discount = ({desconto}) => {
    return (
        <>
            <a href="#" className="btn btn-yellow position-absolute top-0 start-0 ">{desconto}% OFF</a>
        </>
    );
}

export default Discount