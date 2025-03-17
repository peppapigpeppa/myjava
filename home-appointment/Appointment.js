import React, { useState } from 'react';
import axios from 'axios';
import DiscountImg from "../../assets/images/discount-image.png";

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3333/sale/send', formData);
            alert('Your query has been sent successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error sending your query:', error);
            alert('Failed to send your query. Please try again.');
        }
    };

    return (
        <div className="book-appointment" style={{ backgroundColor: '#00A94F' }}>
            <div className="container">
                <div className="row">
                    <div className="section-title mb-70">
                        <h1>5% off on the First Order</h1>
                    </div>
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12 discount-images">
                        <img className="discount-image" src={DiscountImg} alt={"discount-image"}/>
                        <div className="book-quote-form ml-65 pt-70 pb-70">
                            <form className="discount-form" onSubmit={handleSubmit}>
                                <div className="col-xl-6 discount-info">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="row discount-info-wrapper">
                                    <div className="col-xl-12 discount-info">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 discount-info">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="l-btn quote-btn submit-discount">
                                    Get a Discount
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;