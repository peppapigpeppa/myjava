import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import HeaderBottomOne from "../../common/header/HeaderBottomOne";
import ContactUs from "../../components/contact/ContactUs";
import InstagramIcon from "../../assets/images/icon/ic-instagram.png";
import WhatsppIcon from "../../assets/images/icon/ic-whatsapp.png";

const CategoryProducts = () => {
    const { categoryId } = useParams(); // Получение ID категории из URL
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(
        parseInt(categoryId) || null
    );
    const navigate = useNavigate();

    useEffect(() => {
        // Фетчим продукты
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3333/products/all");
                setProducts(response.data);
            } catch (error) {
                console.error("Ошибка при получении продуктов:", error);
            }
        };

        // Фетчим категории
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:3333/categories/all");
                setCategories(response.data);
            } catch (error) {
                console.error("Ошибка при получении категорий:", error);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const handleCategoryClick = (id) => {
        setSelectedCategory(id); // Устанавливаем выбранную категорию
        navigate(`/category/${id}`); // Перенаправляем на URL для этой категории
    };

    // Фильтруем продукты по выбранной категории
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.categoryId === selectedCategory)
        : products;

    return (
        <>
            <HeaderBottomOne />
            <div className="categories-area bg-light pt-50 pb-50">
                <div className="container">
                    <div className="categories-list text-center">
                        <h2>Categories</h2>
                        <div className="categories-buttons">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`category-button ${
                                        selectedCategory === category.id ? "active" : ""
                                    }`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-area bg-white pt-110 pb-110">
                <div className="section-title text-center mb-70">
                    <h1>
                        {selectedCategory
                            ? `Products in "${categories.find((cat) => cat.id === selectedCategory)?.title}"`
                            : "All Products"}
                    </h1>
                </div>
                <div className="container">
                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div
                                    className="col-xl-3 col-lg-3 col-md-6"
                                    key={product.id}
                                >
                                    <div className="single-product text-center box-shadow-3">
                                        <div className="single-product-icon">
                                            <img
                                                className="product-image"
                                                src={`http://localhost:3333${product.image}`}
                                                alt={product.title}
                                            />
                                        </div>
                                        <h5>{product.title}</h5>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No products in this category.</p>
                        )}
                    </div>
                </div>
            </div>
            <ContactUs
                phone="+7 (499) 350-66-04"
                address="Dubininskaya Ulitsa, 96, Moscow, Russia, 115093"
                workingHours="24 hours a day"
                socials={[
                    { name: "Instagram", icon: InstagramIcon, link: "https://instagram.com" },
                    { name: "WhatsApp", icon: WhatsppIcon, link: "https://whatsapp.com" },
                ]}
            />
        </>
    );
};

export default CategoryProducts;