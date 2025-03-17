import React from "react";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import Feature from "../components/features/Features";
import ContactUs from "../components/contact/ContactUs";
import InstagramIcon from "../assets/images/icon/ic-instagram.png";
import WhatsppIcon from "../assets/images/icon/ic-whatsapp.png";

const Categories = () => {
    return (
        <>
            <HeaderBottomOne />
            <Feature />
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
};

export default Categories;