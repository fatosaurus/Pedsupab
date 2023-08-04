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
import imag_blog2 from "../assets/image/image_blog2.jpg";

const Blog2 = () => {
  const [reloadKey, setReloadKey] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
  return (
    <div className="site-wrap">
      <Header key={reloadKey} productscount={cart?.length > 0 ? cart?.length : ''} />

      <div className="inner-small-banner innerbanner d-none">
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
                      <h3>Isn&#39;t it safe to wear a condom?</h3>
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
                    <img src={imag_blog2} alt='' className='img-fluid' />
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
                          Syphilis is caused by a bacterium that can be present in various bodily fluids,
                          including saliva. The disease has an incubation period, and common symptoms
                          include sores on the genitals, a rash on the body, fever, enlarged lymph nodes,
                          and can be transmitted from mother to baby during pregnancy.
                        </p>
                        <p>
                          Gonorrhea, caused by a bacterium, is often contracted through unprotected
                          sexual intercourse. Common symptoms in males include discharge from the
                          urethra and painful urination, while females may experience yellowish, foul-
                          smelling vaginal discharge without itching.
                        </p>
                        <p>
                          Genital warts, caused by the human papillomavirus (HPV), have several strains.
                          High-risk strains, such as 16 and 18, can lead to the development of cancer.
                          The incubation period for this disease is approximately three weeks, and

                          symptoms include small, cauliflower-like growths on the genitals. It can be
                          easily transmitted through sexual contact or skin-to-skin contact and can
                          spread to other areas of the body through contact.
                        </p>
                        <p>Hepatitis B is caused by the hepatitis B virus. Infected individuals may
                          experience symptoms such as jaundice, yellowing of the skin, dark urine,
                          abdominal pain, nausea, and fatigue. It can be transmitted from mother to
                          baby during pregnancy.</p>
                        <p>It is better to avoid risks because nowadays, there are options available for
                          checking sexual health for both yourself and your partner. You can perform
                          self-collect tests for sexually transmitted infections (STIs) if you are
                          uncomfortable visiting a healthcare facility and prefer privacy. Taking care of
                          sexual health is not embarrassing or strange, it is essential to get checked for
                          yourself and your loved one.</p>
                        <div className="row">
                          <div className="col-lg-6"></div>
                          <div className="col-lg-6">
                            <p style={{ float: "right" }}>แหล่งข้อมูล อ้างอิง</p>

                            <p style={{ float: "right", display: "block" }}>ข้อมูล ณ วันที่ 11 สิงหาคม 2565</p>
                            <p style={{ float: "right", display: "block" }}> ที่มา : อ. นพ.ธนภพ บำเพ็ญเกียรติกุล</p>
                            <p style={{ float: "right", display: "block" }}>  ศูนย์เชี่ยวชาญเฉพาะทางด้านสุขภาพคนข้ามเพศ


                            </p>
                          </div>
                        </div>
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

export default Blog2;
