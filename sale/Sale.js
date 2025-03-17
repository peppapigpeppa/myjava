import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SaleProducts = () => {
    const [saleProducts, setSaleProducts] = useState([]);

    // Получение данных о продуктах с API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3333/products/all');
                const products = response.data;

                // Фильтруем только те продукты, у которых есть discount_price
                const filteredProducts = products.filter(product => product.discont_price !== null);
                setSaleProducts(filteredProducts);
            } catch (error) {
                console.error('Ошибка при получении продуктов:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="features-area bg-white pt-110 pb-110">
            <div className="section-title text-center mb-70">
                <h1>Products on Sale</h1>
            </div>
            <div className="container">
                <div className="row">
                    {saleProducts.map((product) => {
                        // Рассчитываем скидку в процентах
                        const discountPercent = Math.round(
                            ((product.price - product.discont_price) / product.price) * 100
                        );

                        return (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={product.id}>
                                <div className="single-feature text-center box-shadow-3">
                                    {/* Стикер с процентом скидки */}
                                    <div className="discount-badge">
                                        -{discountPercent}%
                                    </div>
                                    <div className="single-feature-icon">
                                        <img
                                            className="product-image"
                                            src={`http://localhost:3333${product.image}`}
                                            alt={product.title}
                                        />
                                    </div>
                                    <h5>{product.title}</h5>
                                    <p>{product.description}</p>
                                    <div className="product-prices">
                                        <span className="original-price">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <span className="discount-price">
                                            ${product.discont_price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SaleProducts;
