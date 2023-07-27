import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import affiliate_img from "../assets/image/affiliate-left-img.png";


const ThankYou = () => {
    return (
        <div className='site-wrap thankyou-page'>
            <Header />
            <div className="thank_you_w" style={{ backgroundImage: `url(${affiliate_img})` }}>
                <div className="thank_you_content">
                    <h2 className="blue-title">Thank You for Signing Up</h2>
                    <p>You will hear back from us soon!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ThankYou;