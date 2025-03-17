import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu">
            <nav id="mobile-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/all-sales">All Sales</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;