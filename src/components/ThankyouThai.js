import React, { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import affiliate_img from "../assets/image/affiliate-left-img.png";


const ThankYouThai = () => {
    const [reloadKey, setReloadKey] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
    return (
        <div className='site-wrap thankyou-page'>
            <Header key={reloadKey} productscount={cart?.length > 0 ? cart?.length : ''} />
            <div className="thank_you_w" style={{ backgroundImage: `url(${affiliate_img})` }}>
                <div className="thank_you_content">
                    <h2 className="blue-title">ขอบคุณสำหรับการสมัคร</h2>
                    <p>คุณจะมาที่นี่จากเรา</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ThankYouThai;