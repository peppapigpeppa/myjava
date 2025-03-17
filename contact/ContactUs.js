import React from 'react';

const ContactUs = ({ phone, address, workingHours, socials }) => {
    return (
        <div className="contact-wrapper">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-cards">
                <div className="contact-card">
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">{phone}</p>
                </div>
                <div className="contact-card">
                    <p className="contact-label">Address</p>
                    <p className="contact-value">{address}</p>
                </div>
                <div className="contact-card">
                    <p className="contact-label">Working Hours</p>
                    <p className="contact-value">{workingHours}</p>
                </div>
                <div className="contact-card">
                    <p className="contact-label">Socials</p>
                    <div className="contact-socials">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={`${social.name} icon`} className="social-icon" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.423201715833!2d37.635046676141!3d55.73547380179221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54af5e42b89c1%3A0x8e2c8a4734f2f330!2sDubininskaya%20Ulitsa%2C%2096%2C%20Moscow%2C%20Russia%2C%20115093!5e0!3m2!1sen!2sru!4v1699882700301!5m2!1sen!2sru"
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map Location"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
