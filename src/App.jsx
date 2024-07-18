import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductViewPage from './pages/ProductViewPage';
import ProductListiningPage from './pages/ProductListingPage';
import Pedidos from './pages/Pedidos';


function App() {

  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductViewPage/>} />
        <Route path="/categories" element={<ProductListiningPage />} />
        <Route path='/orders' element= {<Pedidos />} />
    </Routes>
</Router>
  )
}

export default App
