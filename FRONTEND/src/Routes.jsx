import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductViewPage from './pages/ProductViewPage';
import ProductListiningPage from './pages/ProductListingPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';


const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={<HomePage />} />
                <Route path="/products" element={<ProductListiningPage />} />
                <Route path="/ProductViewPage" element={<ProductViewPage />} />
                <Route path="/products-page" element={<ProductsPage />} />
                <Route path='*' element={<Navigate to='/home' />} />
                <Route path="/ProductViewPage/:id" element={<ProductViewPage/>} />
                <Route path="/LoginPage" element={<LoginPage/>} />
            </Routes>
        </Router>
    );
}

export default Rotas;