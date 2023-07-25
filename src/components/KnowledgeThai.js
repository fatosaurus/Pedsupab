import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import knowlage_title from "../assets/image/knowlage_title.png";
import Blog_Highlight from "../assets/image/Blog-Highlight.png";
import blog_img from "../assets/image/blog-img.png";
import imag_blog2 from "../assets/image/image_blog2.jpg";


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
                  <img src={imag_blog2} alt='' className='image-fluid' />
                </div>
                <div className='col-lg-5 content'>
                  <h2 className='post-title'>
                    เนื้อแนบเนื้อ ปลอดภัยจริงหรอ?

                  </h2>
                  <div className='post-meta'>Pedsupab Team 17 July 2023 </div>
                  <p>

                    หลายคนสงสัยว่าความรู้สึกแบบเนื้อแนบเนื้อมันดีกว่าใส่ถุงยางป้องกันจริงๆหรอ
                    แล้วถ้าเนื้อแนบเนื้อบ่อยๆจะเสี่ยงติดโรคติดต่อทางเพศสัมพันธ์ได้ทันทีเลยไหม วันนี้เราจะมาพูดคุยถึงหัวข้อนี้กัน
                    เรื่องการป้องกันใส่ถุงยางอนามัยขึ้นอยู่กับการตกลงของทั้งสองฝ่าย
                    ซึ่งไม่ว่าจะเป็นผู้หญิงหรือผู้ชายควรมีความยิมยอมกันทั้งสองฝ่ายไม่ว่าจะใส่ถุงหรือไม่ใส่
                    ส่วนใหญ่เรามักจะได้ยินมาว่าถ้าสดแล้วจะฟิลลื่นกว่าแบบถุง
                    ซึ่งอาจจะไม่จริงเสมอไปเพราะถุงยางอนามัยในปัจุบันนี้ต่างผลิตออกมาแข่งขันกันเรื่องสรรพคุณความบางเฉียบเหมือนไม่ใ
                    ส่ ฟิลเนื้อแนบเนื้อ แถมยังมีสารหล่อลื่นเลียนแบบธรรมชาติ
                    หลายยี่ห้อต่างโฆษณาถึงความลื่นของสารหล่อลื่นชนิดที่ว่าลื่นเสมือนของธรรมชาติ
                    แต่ก็มีบางคนที่ชอบสอดใส่สดโดยไม่ใส่ถุงยาง อาจเพราะเหตุผลแพ้ถุงยางอนามัย หรือก็เราคบกันแล้วจะไปกังวลทำไม
                    เหตุผลความเชื่อใจ
                  </p>

                  <p>

                    การมีเพศสัมพันธ์ภายนอก การเล้าโลม การใช้ปาก (Oral Sex ) ไม่ว่าจะแบบไหนไม่สอดใส่เข้าไป
                    ก็มีความเสี่ยงที่จะติดโรคติดต่อทางเพศสัมพันธ์
                    ผ่านทางสารคัดหลั่งของร่างกายบางคนร่างกายแข็งแรงภูมิคุ้มกันไม่บกพร่องก็สามารถต้านเชื้อเองได้
                    แล้วถ้าร่างกายไม่แข็งแรงมีโอกาสเสี่ยงติดโรคติดต่อทางเพศสัมพันธ์ได้
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
