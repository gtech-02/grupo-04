import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const ProductsPage = () => {
    const query = useQuery();
    const searchQuery = query.get('filter');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('Search Query:', searchQuery);
        const fetchProducts = async () => {
            if (searchQuery) {
                try {
                    const response = await fetch(`http://localhost:3001/products?name_like=${searchQuery}`);
                    const data = await response.json();
                    setProducts(data);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            }
        };

        fetchProducts();
    }, [searchQuery]);

    return (
        <div>
            <h1>Produtos</h1>
            <p>Resultados da pesquisa: {searchQuery}</p>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
