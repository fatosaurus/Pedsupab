import React, { useState } from "react";
import "../style.css";
import Header from "./Header";
import Footer from "./Footer";
import banner1 from "../assets/image/banner-1.jpg";
import blog_thumb_1 from "../assets/image/blog_thumb_1.jpg";
import blog_thumb_2 from "../assets/image/blog_thumb_2.jpg";
import blog_thumb_3 from "../assets/image/blog_thumb_3.jpg";
import new_text from "../assets/image/new-text.png";
import video from "../assets/image/video.jpg";
import faq_text_img from "../assets/image/faq_text_img.png";
import faq_img_1 from "../assets/image/faq_img_1.png";
import faq_img_2 from "../assets/image/faq_img_2.png";
import faq_img_3 from "../assets/image/faq_img_3.png";
import faq_img_4 from "../assets/image/faq_img_4.png";
import faq_star_1 from "../assets/image/faq_star_1.png";
import faq_star_2 from "../assets/image/faq_star_2.png";
import faq_star_3 from "../assets/image/faq_star_3.png";
import blog_thumb__1 from "../assets/image/blog_thumb_1.jpg";
import blog_thumb__2 from "../assets/image/blog_thumb_2.jpg";
import blog_thumb__4 from "../assets/image/blog_thumb_4.jpg";
import blog_thumb__5 from "../assets/image/blog_thumb_5.jpg";
import static_cont_img_1 from "../assets/image/static-cont-img-1.png";
import static_cont_img_2 from "../assets/image/static-cont-img-2.png";
import static_cont_img_3 from "../assets/image/static-cont-img-3.png";
import Blog_Highlight from "../assets/image/Blog-Highlight.png";
import { Link } from "react-router-dom";

import HomeTitleUnderline from "../iconComponents/HomeTitleUnderline.js";

const HomeThai = () => {
  const [bannerData, setBannerData] = useState([
    { "img": "images/banner_1.jpg", "link": "#" },
    { "img": "images/banner_1.jpg", "link": "#" },
    { "img": "images/banner_1.jpg", "link": "#" },
  ]);

  return (
    <div className='site-wrap'>
      <Header />
      <div
        id='carouselExampleAutoplaying'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        {/* caro bullets */}
        <div className="carousel-indicators">
          {bannerData.map((item, ind) => (
          <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={ind} className={`${ind === 0 ? 'active' : ''}`} aria-label={"Slide "+(ind+1)}></button>
          ))}
          </div>
        {/* caro bullets ends */}

        <div className='carousel-inner'>
          {bannerData.map((item, ind) => (
            <div className={`carousel-item ${ind === 0 ? 'active' : ''}`} key={'banner_' + ind}>
              <img src={banner1} className='d-block w-100' alt='...' />
            </div>
          ))}

        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <section className='feature-three-blogs'>
        <div className='container'>
          <div className="text-center">
          <h2 className='d-inline-block primary-title bold text-center underline'>

            Let’s talk SEX
            <div className="line">
              <HomeTitleUnderline />
            </div>
          </h2>
          </div>

          <div className='feature-three-blogs-w'>
            <div className='item'>
            <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb_1} alt='' />
              </div>
              <h3 className='blog-title'>

                เพศสัมพันธ์เป็นสิ่งที่สวยงาม
              </h3>
              </Link>
            </div>
            <div className='item'>
            <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb_2} alt='' />
              </div>
              <h3 className='blog-title'>

                เพศสัมพันธ์เป็นสิ่งที่สวยงาม
              </h3>
              </Link>
            </div>
            <div className='item'>
            <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb_3} alt='' />
              </div>
              <h3 className='blog-title'>

                เพศสัมพันธ์เป็นสิ่งที่สวยงาม
              </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='single-video-sec'>
        <div className='container'>
          <h2 className='trinary-title text-center'>

            Watch
          </h2>
          <div className='iframe-embade'>
            <img src={new_text} alt='' className='floated-img mb-2' />
            <div className="embed-responsive embed-responsive-container"><iframe className="responsive-iframe" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe></div>
          </div>
        </div>
      </div>

      <div className='section-faq-home'>
        <div className='container'>
          <img src={faq_text_img} alt='' className='faq-title' />
          <Link to='' className='faq-q'>
            <img src={faq_img_1} alt='' />
          </Link>
          <Link to='' className='faq-q'>
            <img src={faq_img_2} alt='' />
          </Link>
          <Link to='' className='faq-q'>
            <img src={faq_img_3} alt='' />
          </Link>
          <Link to='' className='faq-q'>
            <img src={faq_img_4} alt='' />
          </Link>
          <Link to='' className='faq-star-1'>
            <img src={faq_star_1} alt='' />
          </Link>
          <Link to='' className='faq-star-2'>
            <img src={faq_star_2} alt='' />
          </Link>
          <Link to='' className='faq-star-3'>
            <img src={faq_star_3} alt='' />
          </Link>
        </div>
      </div>

      <div className='home-recent-blog'>
        <div className='container recent-blog-bg'>
          <div className='blogs-w d-flex'>
            <div className='item'>
              <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb__1} alt='' />
              </div>
              <h3 className='blog-title'>

                เพศสัมพันธ์เป็นสิ่งที่สวยงาม
              </h3>
              </Link>
            </div>
            <div className='item'>
            <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb__2} alt='' />
              </div>
              <h3 className='blog-title'>

                เพศสัมพันธ์เป็นสิ่งที่สวยงาม
              </h3>
              </Link>
            </div>
            <div className='item'>
            <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb__4} alt='' />
              </div>
              <h3 className='blog-title'>
                เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่bก็ไม่เสมอไป{" "}
              </h3>
              </Link>
            </div>
            <div className='item'>
            <Link to="/knowledge">
              <div className='graphic'>
                <img src={blog_thumb__5} alt='' />
              </div>
              <h3 className='blog-title'>
                เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่
              </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='home-static-content'>
        <h3 className='trinary-title text-center'>

        เธอรู้รึเปล่า?
        </h3>
        <div className='container'>
          <div className='flex-img-card'>
            <div className='item'>
              <Link to=''>
                <img src={static_cont_img_1} alt='' />
              </Link>
            </div>
            <div className='item'>
              <Link to=''>
                <img src={static_cont_img_2} alt='' />
              </Link>
            </div>
            <div className='item'>
              <Link to=''>
                <img src={static_cont_img_3} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='home-spacific-blog'>
        <div className='container'>
          <div className='cover-card'>
            <img src={Blog_Highlight} alt='' className='card-img' />
            <div className='floted-caption pos-bot'>
              <div className='meta-date'>Sarisa Gajaseni 20 Mar 2023</div>
              <h3 className='card-title big'>
              <Link to="/knowledge">
                เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ ก็ไม่เสมอไป{" "}
                </Link>
              </h3>
              <p className='card-text big'>

                เข้าใจ SEX กับความปลอดภัยในบทความนี้
              </p>
              <div className='action btn-groups'>
                <Link to='/knowledge/blog' className='pill pill-outline'>
                  #SAFESEX
                </Link>
                <Link to='/knowledge/blog' className='pill pill-outline'>

                  #STDPREVENTION{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeThai;
