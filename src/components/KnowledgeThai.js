import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import knowlage_title from "../assets/image/knowlage_title.png";
import Blog_Highlight from "../assets/image/Blog-Highlight.png";
import blog_img from "../assets/image/blog-img.png";

const KnowledgeThai = () => {

  return (
    <div className='site-wrap blog-page'>
      <Header />

      <div className='knoledge-big-banner'>
        <h1 className='text-center'>
          <img src={knowlage_title} alt='' />
        </h1>
        <p className='page-sub-title text-center'>
          พื้นที่แบ่งปันเรื่องที่ควรรู้ เพราะความรู้จะมีค่าเมื่อเกิดการบอกต่อ
       
        </p>
        <div className='text-center mb-5'>
          <p className=' lead'>
          จากทีมงานของเรา
          
          </p>
        </div>
        <div className='quick-knoledge-sec'>
          <div className='container'>
            <div className='cover-card mb-0'>
              <img src={Blog_Highlight} alt='' className='card-img' />
              <div className='floted-caption pos-bot'>
                <div className='meta-date'>Sarisa Gajaseni 20 Mar 2023</div>
                <h3 className='card-title big'>
                 
                  เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ ก็ไม่เสมอไป{" "}
                </h3>
                <p className='card-text big'>
                  เข้าใจ SEX กับความปลอดภัยในบทความนี้
                
                </p>
                <div className='action btn-groups'>
                  <Link to='/knowledge/blog' className='pill pill-outline'>
                  {/* <Link to='' className='pill pill-outline'> */}
                    #SAFESEX
                  </Link>
                  <Link to='/knowledge/blog' className='pill pill-outline'>
                  {/* <Link to='' className='pill pill-outline'> */}
                 
                    #STDPREVENTION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Banner ends --> */}
      {/* <!-- search start --> */}
      <div className='bg-search-sec bg-yellow'>
        <h2 className='primary-title text-center text-white'>
        สงสัยเรื่องอะไรอยู่
         
        </h2>
        <div className='search-wrap-block'>
          <form action='' className='search-form-w'>
            <input
              type='text'
              name=''
              className='form-control'
              placeholder='ค้นหา'
            />
            <input type='button' value='' className='btn-search' />
          </form>
        </div>
      </div>
      {/* <!-- search start Ends --> */}

      {/* <!-- blog lists --> */}
      <div className='blog-lists'>
        <div className='container'>
          <div className='secondary-title'>
         
          เรื่องต่างๆ 
          </div>
          <div className='blog-filter'>
            <Link to='' className='btn btn-pill-outline active'>
              #SAFESEX
            </Link>
            <Link to='' className='btn btn-pill-outline '>
            
              #STDPREVENTION
            </Link>
            <Link to='' className='btn btn-pill-outline '>
              #HPV
            </Link>
            <Link to='' className='btn btn-pill-outline '>
          
              #BIRTHCONTROL
            </Link>
            <Link to='' className='btn btn-pill-outline '>
             
              #RELATIONSHIPS
            </Link>
          </div>

          {/* <!-- posts --> */}
          <div className='posts'>
            <div className='post-article card'>
              <div className='row'>
                <div className='col-lg-7 graphic'>
                  <img src={blog_img} alt='' className='image-fluid' />
                </div>
                <div className='col-lg-5 content'>
                  <h2 className='post-title'>
                    เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ก็ไม่เสมอไป เข้าใจ SEX
                    กับความปลอดภัยในบทความนี้
                 
                  </h2>
                  <div className='post-meta'>Sarisa Gajaseni 20 Mar 2023</div>
                  <p>
                
                    Lorem ipsum dolor sit amet. Et eius galisum ut expedita
                    alias qui neque laboriosam aut fugiat officiis et quia
                    tempore. Id recusandae modi eos architecto odio et placeat
                    cupiditate ut fugit asperiores. Eum iure tempore qui odio
                    autem et asperiores atque in illum molestias qui temporibus
                    voluptatum. Ut velit amet et perferendis fugiat ut nemo
                    voluptas et cumque voluptatem et ipsam nesciunt ad molestiae
                    perspiciatis.
                  </p>

                  <p>
                 
                    Eum vero molestias non ipsa modi quo recusandae voluptates.
                    Non consequuntur repudiandae non laborum nihil qui placeat
                    temporibus aut nesciunt quasi ab quia quis. Id architecto
                    magni in voluptatem nesciunt eos quibusdam
                  </p>
                  <div className='post-tag-meta'>
                    <Link to='' className='btn btn-pill-outline '>
                
                      #BIRTHCONTROL
                    </Link>
                    <Link to='' className='btn btn-pill-outline '>
                 
                      #RELATIONSHIPS
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='post-article card'>
              <div className='row'>
                <div className='col-lg-7 graphic'>
                  <img src={blog_img} alt='' className='image-fluid' />
                </div>
                <div className='col-lg-5 content'>
                  <h2 className='post-title'>
                  
                    เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ก็ไม่เสมอไป เข้าใจ SEX
                    กับความปลอดภัยในบทความนี้
                  </h2>
                  <div className='post-meta'>Sarisa Gajaseni 20 Mar 2023</div>
                  <p>
                  
                    Lorem ipsum dolor sit amet. Et eius galisum ut expedita
                    alias qui neque laboriosam aut fugiat officiis et quia
                    tempore. Id recusandae modi eos architecto odio et placeat
                    cupiditate ut fugit asperiores. Eum iure tempore qui odio
                    autem et asperiores atque in illum molestias qui temporibus
                    voluptatum. Ut velit amet et perferendis fugiat ut nemo
                    voluptas et cumque voluptatem et ipsam nesciunt ad molestiae
                    perspiciatis.
                  </p>

                  <p>
                
                    Eum vero molestias non ipsa modi quo recusandae voluptates.
                    Non consequuntur repudiandae non laborum nihil qui placeat
                    temporibus aut nesciunt quasi ab quia quis. Id architecto
                    magni in voluptatem nesciunt eos quibusdam
                  </p>
                  <div className='post-tag-meta'>
                    <Link to='' className='btn btn-pill-outline '>
                    
                      #BIRTHCONTROL
                    </Link>
                    <Link to='' className='btn btn-pill-outline '>
                   
                      #BIRTHCONTROL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- posts Ends --> */}
          <div className='post-pagination'>
            <ul className='pagination'>
              <li className='page-item'>
                <Link className='page-link active' to='#'>
                  1
                </Link>
              </li>
              <li className='page-item'>
                <Link className='page-link' to='#'>
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link className='page-link' to='#'>
                  3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- blog lists Ends --> */}

      {/* <!-- Start footer --> */}
      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default KnowledgeThai;
