import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import blogbanner1 from "../assets/image/blogbanner1.png";
import profilepic from "../assets/image/profilepic.png";
import banner_pic1 from "../assets/image/banner_pic1.png";
import blog_img1 from "../assets/image/blog_img1.png";
import blog_pic1 from "../assets/image/blog_pic1.png";
import blog_pic2 from "../assets/image/blog_pic2.png";
import blog_pic3 from "../assets/image/blog_pic3.png";
import imag_blog3 from "../assets/image/img_blog3.jpg";

const Blog3 = () => {
  const [reloadKey, setReloadKey] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
  return (
    <div className="site-wrap">
      <Header key={reloadKey} productscount={cart?.length > 0 ? cart?.length : ''} />

      <div className="inner-small-banner innerbanner">
        <div className="text-center">
          <img src={blogbanner1} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="blog_content_outer">
        <div className="inner_content_maincont">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner_maincont">
                  <div className="inner_head_info">
                    <h2>#SAFESEX #STDPREVENTION</h2>
                    <div className="caption_info">
                      <h3>Can Sexual Activity Cause Stress? </h3>
                      {/* <p>เข้าใจ SEX กับความปลอดภัยในบทความนี้</p> */}
                      <div className="profile_add">
                        <div className="pref_pic">
                          <img src={profilepic} alt="" className="img-fluid" />
                        </div>
                        <div className="pref_pic_text">
                          <h4>Pedsupab Team</h4>
                          <p>20 Mar 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='inner_cont_des_view'>
                    <p>
                      ก่อนอ่านบทความนี้
                      เราอยากชวนคุณนึกถึงเซ็กซ์ที่ผ่านมาของตัวเองดู
                      แล้วตอบคำถามว่าเคยมีเหตุการณ์ทำนองนี้เกิดขึ้นกับคุณไหม?{" "}
                    </p>

                    <p>
                      หลังถึงจุดสุดยอด คู่นอนรีบลุกไปล้างตัวเพราะรู้สึกผิดบาป
                      ทั้งที่เรายังตัวสั่นไม่เสร็จ
                      กล้ามเนื้อไม่ทันคลายตัวจากการจิกเกร็ง
                      พยายามรั้งให้นอนสัมผัสร่างกายกันต่อสักนิด
                      แต่ชวนยังไงอีกฝ่ายก็ไม่ยอม ยืนยันจะไปอาบน้ำก่อนเพื่อชะล้าง
                      ‘ความสกปรก’ ออกจากเนื้อตัว
                      จนเรางงว่าเซ็กซ์ที่เพิ่งผ่านพ้นดีหรือแย่
                      และเราต้องรู้สึกยังไง?
                    </p>

                    <p>
                      ปฏิกิริยาแบบนี้ไม่ใช่เรื่องแปลก
                      โดยเฉพาะในสังคมที่ปลูกฝังค่านิยมว่าเซ็กซ์เป็นสิ่งสกปรก
                      หรือเรื่องต้องห้าม
                      เมื่อเราตั้งต้นด้วยชุดความคิดเช่นนี้ตั้งแต่เด็ก
                      ไม่ผิดเลยที่เมื่อถึงเวลามีเซ็กซ์
                      เราจะสลัดตัวเองออกจากความรู้สึกผิดบาปนั้นได้ยากเหลือเกิน
                      ความย้อนแย้งคือในขณะเดียวกันเซ็กซ์ก็สร้างความสุขให้เรา
                      ซึ่งเป็นธรรมชาติของมนุษย์ ที่ต้องการความสุข
                      แต่เมื่อโดนค่านิยมนี้ครอบอยู่
                      การมีเซ็กซ์กลับกลายเป็นทุกข์เพราะเราเผลอไปมีความสุขกับสิ่งต้องห้าม
                    </p>

                    <p>
                      หลังถึงจุดสุดยอด บางคนอาจทำมากกว่าการอาบน้ำ แต่ยังก่นด่า
                      โบยตีตัวเองด้วยแส้ทางศีลธรรม
                    </p>

                    <p>
                      คำถามคือ เซ็กซ์ควรเป็นเรื่องที่เราต้องรู้สึกผิดหรือเปล่า?
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addinfo3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

              </div>
            </div>
          </div>
        </div>

        <div className="inner_content_maincont">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner_maincont">
                  <div className='blog-middle-img mb-5'>
                    <img src={imag_blog3} alt='' className='img-fluid' />
                  </div>
                  <div className="inner_cont_des_view">
                    {/* <h2>เซ็กซ์คือการเมือง</h2>
                                        <p>
                                            ปฏิเสธไม่ได้ว่าหนึ่งในปัจจัยที่ปลูกฝังค่านิยมนี้ให้หลายคนคือวิชาเพศศึกษา
                                        </p>
                                        <p>
                                            นับตั้งแต่ปี 1960 จนถึงปัจจุบัน
                                            วิชาเพศศึกษาในโรงเรียนแบ่งเป็น 2 แบบ อย่างแรกคือหลักสูตร
                                            ที่เน้นไม่ให้มีเพศสัมพันธ์ (Abstinence-Only Sex Education)
                                            เน้นการสอนไม่ให้วัยรุ่นมีเพศสัมพันธ์ จนกว่าจะแต่งงาน
                                            เพราะเชื่อว่านั่นคือสิ่งที่ปลอดภัยที่สุด
                                            หลักสูตรนี้จะไม่พูดถึงวิธีการใช้ถุงยาง และการคุมกำเนิด
                                            ยกเว้นจะหยิบยกมาด้อยค่าว่าแม้ป้องกันแล้วแต่ยังมีอัตราความล้มเหลวอยู่
                                            ไม่ได้ปลอดภัยร้อยเปอร์เซ็นต์
                                        </p>

                                        <p>
                                            การสอนอีกแบบเรียกว่าหลักสูตรเพศวิถีศึกษารอบด้าน
                                            (Comprehensive Sexuality Education)
                                            เน้นการเรียนการสอนที่ครอบคลุมตั้งแต่เรื่องพัฒนาการด้านร่างกายและจิตใจ
                                            การทำงานของสรีระ พฤติกรรมทางเพศ ความสัมพันธ์
                                            ไปจนถึงทัศนคติและค่านิยมทางสังคมที่ส่งผลต่ออัตลักษณ์ทางเพศ
                                            ช่วงหลังยังมีโปรแกรมแบบค็อกเทลผสมเพิ่มเข้ามา
                                            (Abstinence-Plus Sex Education)
                                            ซึ่งยังเน้นว่าไม่ควรมีเซ็กซ์
                                            แต่ก็ยอมสอนเรื่องการใช้ถุงยางและวิธีการคุมกำเนิด
                                        </p>

                                        <p>
                                            หลักสูตรที่เน้นไม่ให้มีเพศสัมพันธ์ยึดโยงอยู่กับศาสนาและการเมืองอย่างเหนียวแน่น
                                            ในหลายประเทศมีการอ้างว่าการคุมกำเนิดและการมีเซ็กซ์ก่อนแต่งงานขัดต่อหลักทางศาสนา
                                            และผู้ที่ทำงานวิจัยเพื่อส่งเสริมหลักสูตรที่เน้นไม่ให้มีเพศสัมพันธ์ก็ได้รับเงินสนับสนุนจากรัฐมากและยาวนานกว่า
                                            อย่างในอเมริกาเพิ่งจะหันมาพิจารณาให้ทุนสนับสนุนหลักสูตรแบบรอบด้านเพิ่ม
                                            ตอนรัฐบาลของบารัก โอบามา แต่พอโดนัลด์ ทรัมป์
                                            ขึ้นเป็นประธานาธิบดีก็กลับไปสนใจหลักสูตรที่เน้นไม่ให้มีเพศสัมพันธ์แบบเดิม
                                        </p> */}

                    <div className="inner_block_info2">
                      {/* <div className='innerblog_add'>
                        <img
                          src={blog_img1}
                          alt=''
                          className='img-fluid'
                        />
                      </div> */}
                      <div className="innerblog_des2">
                        <p>
                          Engaging in sexual activity, including self-pleasure, often aims to reach a
                          climax or to please the other party involved. However, some couples may
                          feel negative emotions such as stress, anxiety, depression, or
                          dissatisfaction. These feelings commonly arise after sexual activities and
                          are known as Post-coital tristesse (PCT). While PCT is a common
                          experience and usually subsides on its own, for some individuals, it may
                          persist for a longer duration due to the involvement of certain brain
                          chemicals.
                        </p>
                        {/* <h3><b>วิธีการผ่อนคลายอาการ Post-coital tristesse (PCT)</b></h3> */}
                        <p>

                          To alleviate symptoms of Post-coital tristesse (PCT), it is recommended
                          to start by being mindful of your own sensations and evaluating the
                          severity of the symptoms. If you feel you have control over your
                          emotions, you can practice deep breathing exercises. Take deep breaths
                          in and out multiple times, focusing on regulating your breath. Although
                          it may not seem directly related, regulating your breathing can help relax
                          the hormones in your body and bring them back to a stable state more
                          quickly. Allow yourself to breathe comfortably and be in a peaceful state
                          of mind.                        </p>
                        <p>Consenting sexual encounters, along with good communication and self-
                          care, are natural aspects of human life. After achieving a calm state of
                          mind, it is advised to have an open and honest conversation with your
                          partner about your sexual preferences and any concerns or anxieties that
                          arise after sexual activities. If symptoms persist and you worry about the
                          long-term impact on your relationship, it is recommended to seek
                          professional help, such as consulting a psychiatrist or finding a mediator
                          to listen and help address the underlying issues.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner_content_maincont">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner_subblock">
                  <h2>Related Blogs</h2>
                  <div className="inner_subblock_des">
                    <div className="blog_item">
                      <div className="blog_item_pic">
                        <Link to="#">
                          <img src={blog_pic1} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <p>
                        <Link to="#">
                          เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ ก็ไม่เสมอไป เข้าใจ
                          SEX กับความ ปลอดภัยในบทความนี้{" "}
                        </Link>
                      </p>
                    </div>

                    <div className="blog_item">
                      <div className="blog_item_pic">
                        <Link to="#">
                          <img src={blog_pic2} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <p>
                        <Link to="#">
                          เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ ก็ไม่เสมอไป เข้าใจ
                          SEX กับความ ปลอดภัยในบทความนี้{" "}
                        </Link>
                      </p>
                    </div>

                    <div className="blog_item">
                      <div className="blog_item_pic">
                        <Link to="#">
                          <img src={blog_pic3} alt="" className="img-fluid" />
                        </Link>
                      </div>
                      <p>
                        <Link to="#">
                          เพศสัมพันธ์เป็นสิ่งที่สวยงาม แต่ ก็ไม่เสมอไป เข้าใจ
                          SEX กับความ ปลอดภัยในบทความนี้{" "}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start footer --> */}
      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default Blog3;
