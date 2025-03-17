import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import NotFound from './pages/NotFound';
import CategoryProducts from './components/products/CategoryProducts'; // Импорт нового компонента

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import './assets/vendor/slick/slick.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/categories" exact element={<Categories />} />
                <Route path="/products" exact element={<Products />} />
                <Route path="/all-sales" exact element={<Sales />} />
                <Route path="/category/:categoryId" exact element={<CategoryProducts />} /> {/* Новый маршрут */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTop className="scrollUp" smooth top="1500" component={<FaLevelUpAlt />} />
        </Router>
    );
}

export default App;