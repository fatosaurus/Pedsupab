import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import knowlage_title from "../assets/image/knowlage_title.png";
import Blog_Highlight from "../assets/image/Blog-Highlight.png";
import blog_img from "../assets/image/blog-img.png";

const Knowledge = () => {

  return (
    <div class='site-wrap blog-page'>
      <Header />

      <div class='knoledge-big-banner'>
        <h1 class='text-center'>
          <img src={knowlage_title} alt='' />
        </h1>
        <p class='page-sub-title text-center'>
          พื้นที่แบ่งปันเรื่องที่ควรรู้ เพราะความรู้จะมีค่าเมื่อเกิดการบอกต่อ
       
        </p>
        <div class='text-center mb-5'>
          <p class=' lead'>
            From our team
          
          </p>
        </div>
        <div class='quick-knoledge-sec'>
          <div class='container'>
            <div class='cover-card mb-0'>
              <img src={Blog_Highlight} alt='' class='card-img' />
              <div class='floted-caption pos-bot'>
                <div class='meta-date'>Sarisa Gajaseni 20 Mar 2023</div>
                <h3 class='card-title big'>
                 
                  เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ ก็ไม่เสมอไป{" "}
                </h3>
                <p class='card-text big'>
                  เข้าใจ SEX กับความปลอดภัยในบทความนี้
                
                </p>
                <div class='action btn-groups'>
                  <Link to='/knowledge/blog' class='pill pill-outline'>
                  {/* <Link to='' class='pill pill-outline'> */}
                    #SAFESEX
                  </Link>
                  <Link to='/knowledge/blog' class='pill pill-outline'>
                  {/* <Link to='' class='pill pill-outline'> */}
                 
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
      <div class='bg-search-sec bg-yellow'>
        <h2 class='primary-title text-center text-white'>
          What’s on your mind?
         
        </h2>
        <div class='search-wrap-block'>
          <form action='' class='search-form-w'>
            <input
              type='text'
              name=''
              class='form-control'
              placeholder='Search for anything'
            />
            <input type='button' value='' class='btn-search' />
          </form>
        </div>
      </div>
      {/* <!-- search start Ends --> */}

      {/* <!-- blog lists --> */}
      <div class='blog-lists'>
        <div class='container'>
          <div class='secondary-title'>
         
            Browse
          </div>
          <div class='blog-filter'>
            <Link to='' class='btn btn-pill-outline active'>
              #SAFESEX
            </Link>
            <Link to='' class='btn btn-pill-outline '>
            
              #STDPREVENTION
            </Link>
            <Link to='' class='btn btn-pill-outline '>
              #HPV
            </Link>
            <Link to='' class='btn btn-pill-outline '>
          
              #BIRTHCONTROL
            </Link>
            <Link to='' class='btn btn-pill-outline '>
             
              #RELATIONSHIPS
            </Link>
          </div>

          {/* <!-- posts --> */}
          <div class='posts'>
            <div class='post-article card'>
              <div class='row'>
                <div class='col-lg-7 graphic'>
                  <img src={blog_img} alt='' class='image-fluid' />
                </div>
                <div class='col-lg-5 content'>
                  <h2 class='post-title'>
                    เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ก็ไม่เสมอไป เข้าใจ SEX
                    กับความปลอดภัยในบทความนี้
                 
                  </h2>
                  <div class='post-meta'>Sarisa Gajaseni 20 Mar 2023</div>
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
                  <div class='post-tag-meta'>
                    <Link to='' class='btn btn-pill-outline '>
                
                      #BIRTHCONTROL
                    </Link>
                    <Link to='' class='btn btn-pill-outline '>
                 
                      #RELATIONSHIPS
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class='post-article card'>
              <div class='row'>
                <div class='col-lg-7 graphic'>
                  <img src={blog_img} alt='' class='image-fluid' />
                </div>
                <div class='col-lg-5 content'>
                  <h2 class='post-title'>
                  
                    เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ก็ไม่เสมอไป เข้าใจ SEX
                    กับความปลอดภัยในบทความนี้
                  </h2>
                  <div class='post-meta'>Sarisa Gajaseni 20 Mar 2023</div>
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
                  <div class='post-tag-meta'>
                    <Link to='' class='btn btn-pill-outline '>
                    
                      #BIRTHCONTROL
                    </Link>
                    <Link to='' class='btn btn-pill-outline '>
                   
                      #BIRTHCONTROL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- posts Ends --> */}
          <div class='post-pagination'>
            <ul class='pagination'>
              <li class='page-item'>
                <Link class='page-link active' to='#'>
                  1
                </Link>
              </li>
              <li class='page-item'>
                <Link class='page-link' to='#'>
                  2
                </Link>
              </li>
              <li class='page-item'>
                <Link class='page-link' to='#'>
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

export default Knowledge;
