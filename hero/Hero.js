import React from 'react';
import {Link} from 'react-router-dom';
import BannerMenu from '../../assets/images/banner_main_menu.jpg';

const Hero = () => {
    
    return (
        <>
            
            <div className="hero-area height-800 bg-property d-flex align-items-center" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${BannerMenu})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-wrapper">
                                <h1>Amazing Discounts on Garden Products!</h1>
                                <Link to="/products" className="l-btn">Check out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;