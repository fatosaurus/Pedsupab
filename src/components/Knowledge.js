import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import knowlage_title from "../assets/image/knowlage_title.png";
import Blog_Highlight from "../assets/image/Blog-Highlight.png";
import blog_img from "../assets/image/blog-img.png";
import imag_blog2 from "../assets/image/image_blog2.jpg";


const Knowledge = () => {

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
            From our team

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
          What’s on your mind?

        </h2>
        <div className='search-wrap-block'>
          <form action='' className='search-form-w'>
            <input
              type='text'
              name=''
              className='form-control'
              placeholder='Search for anything'
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

            Browse
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
                    Isn&#39;t it safe to wear a condom?

                  </h2>
                  <div className='post-meta'>Pedsupab Team 17 July 2023 </div>
                  <p>

                    Many people wonder if the &quot;skin-to-skin&quot; feeling is better than using actual
                    condoms for protection. And if there is frequent &quot;skin-to-skin&quot; contact, does it

                    immediately increase the risk of sexually transmitted diseases? Today, we will
                    discuss this topic.
                    The issue of protection through condom usage depends on the agreement of
                    both parties involved. Whether it is a woman or a man, it is important for both
                    parties to have mutual consent, whether they choose to use a condom or not.
                    In general, we often hear many people believe that the sensation without
                    using condoms is better. However, the use of condoms is crucial for protection
                    against sexually transmitted infections. Condoms act as a barrier, reducing the
                    risk of transmitting diseases during sexual intercourse. While it is true that
                    some individuals may perceive a difference in sensation when using condoms,
                    it is important to prioritize safe sex practices to maintain sexual health.
                    However, this may not always be true because modern condoms are designed
                    to compete in terms of thinness, almost mimicking the feeling of not wearing
                    one. They provide a skin-to-skin sensation and even contain natural-feeling
                    lubricants. Many brands advertise the smoothness of their lubricants, claiming
                    they feel natural. However, there are some people who prefer to engage in
                    unprotected sex for various reasons, such as latex allergies or a sense of trust
                    when in a committed relationship.
                  </p>

                  <p>

                    Engaging in sexual activities outside of penetrative intercourse, such as mutual
                    masturbation or oral sex, also carries a risk of contracting sexually transmitted
                    diseases. Some individuals have a strong immune system that can fight off
                    infections, while others may be more susceptible to contracting diseases if
                    their immune system is compromised. Today, we will provide examples of
                    various diseases that can occur.
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

export default Knowledge;
