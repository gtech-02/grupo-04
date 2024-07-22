import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import ProductViewPage from './pages/ProductViewPage';
import ProductListiningPage from './pages/ProductListingPage';




function App() {

  return (
    <Router>
    <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductViewPage/>} />
        <Route path="/categories" element={<ProductListiningPage />} />
        <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
</Router>
  )
}

export default App

