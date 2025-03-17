import React, { Component } from "react";
import axios from "axios";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import ContactUs from "../components/contact/ContactUs";
import InstagramIcon from "../assets/images/icon/ic-instagram.png";
import WhatsppIcon from "../assets/images/icon/ic-whatsapp.png";

export default class Products extends Component {
    state = {
        products: [],
        categories: [],
        isLoading: true,
        error: null,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const [productsResponse, categoriesResponse] = await Promise.all([
                axios.get("http://localhost:3333/products/all"), // Эндпоинт для продуктов
                axios.get("http://localhost:3333/categories/all"), // Эндпоинт для категорий
            ]);

            this.setState({
                products: productsResponse.data,
                categories: categoriesResponse.data,
                isLoading: false,
            });
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            this.setState({ error, isLoading: false });
        }
    };

    getCategoryTitle = (categoryId) => {
        const category = this.state.categories.find(
            (category) => category.id === categoryId
        );
        return category ? category.title : "Без категории";
    };

    render() {
        const { products, isLoading, error } = this.state;

        if (isLoading) {
            return <p>Загрузка...</p>;
        }

        if (error) {
            return <p>Ошибка при загрузке данных: {error.message}</p>;
        }

        return (
            <>
                <HeaderBottomOne />
            <div className="products-page">
                <h1>Products</h1>
                <div className="products-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img
                                src={`http://localhost:3333${product.image}`}
                                alt={product.title}
                                className="product-image"
                            />
                            <h3>{product.title}</h3>
                            <p className="product-category">
                                Category: {this.getCategoryTitle(product.categoryId)}
                            </p>
                            <p className="product-price">
                                Price: ${product.price.toFixed(2)}
                            </p>
                            {product.discont_price && (
                                <p className="product-discount">
                                    Discount Price: ${product.discont_price.toFixed(2)}
                                </p>
                            )}
                            <p className="product-description">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
                <ContactUs
                    phone="+7 (499) 350-66-04"
                    address="Dubininskaya Ulitsa, 96, Moscow, Russia, 115093"
                    workingHours="24 hours a day"
                    socials={[
                        { name: 'Instagram', icon: InstagramIcon, link: 'https://instagram.com' },
                        { name: 'WhatsApp', icon: WhatsppIcon, link: 'https://whatsapp.com' },
                    ]}
                />
            </>
        );
    }
}