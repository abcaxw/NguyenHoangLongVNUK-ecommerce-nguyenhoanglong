import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css';
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
