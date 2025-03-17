import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feature = () => {
    const [categories, setCategories] = useState([]);

    // Получение данных с API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3333/categories/all');
                setCategories(response.data);
            } catch (error) {
                console.error('Ошибка при получении категорий:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="features-area bg-white pt-110 pb-110">
            <div className="section-title text-center mb-70">
                <h1>Categories</h1>
            </div>
            <div className="container">
                <div className="row">
                    {categories.map((category) => (
                        <div className="col-xl-3 col-lg-3 col-md-6" key={category.id}>
                            <div className="single-feature text-center box-shadow-3">
                                <div className="single-feature-icon">
                                    {/* Используем Link для перенаправления на страницу категории */}
                                    <Link to={`/category/${category.id}`}>
                                        <img
                                            className="category-image"
                                            src={`http://localhost:3333/${category.image}`}
                                            alt={category.name}
                                        />
                                    </Link>
                                </div>
                                <h5>
                                    <Link to={`/category/${category.id}`}>
                                        {category.title}
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;