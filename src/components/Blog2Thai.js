import React, { useState,useEffect } from "react";
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
import imageSafeCondom from "../assets/image/isn't it safe to wear a condom_front.png"

const Blog2Thai = () => {
  const [reloadKey, setReloadKey] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
  return (
    <div className="site-wrap">
      <Header key={reloadKey} productscount={cart?.length > 0 ? cart?.length : ''} />

      <div className="inner-small-banner innerbanner d-none">
        {/* <div className="text-center">
          <img src={blogbanner1} alt="" className="img-fluid" />
        </div> */}
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
                      <h3>เนื้อแนบเนื้อ ปลอดภัยจริงหรอ?</h3>
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
                                    <img src={imageSafeCondom} alt='' className='img-fluid' />
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
                          หลายคนสงสัยว่าความรู้สึกแบบเนื้อแนบเนื้อมันดีกว่า
                          ใส่ถุงจริงๆหรอ
                          แล้วถ้าเนื้อแนบเนื้อบ่อยๆจะติดโรคติดต่อทางเพศสัมพันธ์ได้ทันทีเลยไหม
                          วันนี้เราจะมาพูดคุยถึงหัวข้อนี้กัน
                          เรื่องการป้องกันขึ้นอยู่ที่การตกลงของทั้งสองฝ่าย
                          ซึ่งไม่ว่าจะเป็นผู้หญิงหรือผู้ชายควรมีความยิมยอมกันทั้งสองฝ่ายไม่ว่าจะใส่ถุงหรือไม่ใส่
                          ส่วนใหญ่เรามักจะได้ยินมาว่าถ้าสดแล้วจะฟิลลื่นกว่าแบบถุง
                          ซึ่งอาจจะไม่จริงเสมอไปเพราะถุงยางอนามัยในปัจุบันนี้ต่างผลิตออกมาแข่งขันกันเรื่องสรรพคุณความบางเฉียบเหมือนไม่ใส่
                          ฟิลเนื้อแนบเนื้อ
                          และต่างโฆษณาถึงความลื่นของสารหล่อลื่นต่างๆนาๆ
                          แต่ก็จะมีอีกส่วนที่ชอบสด อาจเพราะเหตุผลแพ้ถุงยางอนามัย
                          หรือก็เราคบกันแล้วจะไปกังวลทำไม เหตุผลความเชื่อใจ
                        </p>
                        <p>
                          การมีเพศสัมพันธ์ภายนอก การเล้าโลม การใช้ปาก (Oral Sex
                          ) ไม่ว่าจะแบบไหนไม่สอดใส่เข้าไป
                          ก็มีความเสี่ยงที่จะติดโรคติดต่อทางเพศสัมพันธ์
                          ผ่านทางสารคัดหลั่งของร่างกายบางคนร่างกายแข็งแรงภูมิคุ้มกันไม่บกพร่องก็สามารถต้านเชื้อเองได้
                          แล้วถ้าร่างกายไม่แข็งแรงเสี่ยงติดโรค
                          <ul>
                            <li>
                              ซิฟิลิส (Syphilis) เกิดจากเชื่อแบคทีเรีย
                              สารคัดหลั่งต่างๆ รวมไปถึงน้ำลาย
                              มีระยะเวลาการฟักตัวของโรค
                              ส่วนใหญ่การแสดงอาการของโรคได้แก่
                              แผลที่อวัยวะเพศแผลขอบแข็ง มีผื่นขึ้นตามตัว มีไข้
                              ต่อมน้ำเหลืองโต
                              สามารถติดต่อจากแม่สู่ทารกในครรภ์ได้
                            </li>
                            <li>
                              โรคหนองใน (Gonorrhea)
                              พบได้บ่อยเกิดจากเชื้อแบคทีเรีย
                              ลักษณะอาการส่วนใหญ่จะติดมาจากการมีเพศสัมพันธ์ที่ไม่ป้องกัน
                              ผู้ชายมีหนองไหลจากท่อปัสสาวะ ปัสสาวะแสบขัด
                              ผู้หญิงมีตกขาวสีเหลืองกลิ่นเหม็นแรง ไม่คัน
                            </li>
                            <li>
                              โรคหูดหงอนไก่ เกิดจากเชื่อไวรัส(HPV)
                              ซึ่งมีหลายสายพันธ์ สายพันธ์ความเสี่ยงสูงคือ 16,18
                              ระยะเวลาการฝักตัวประมาณ 3 สัปดาห์
                              อาการมีติ่งเนื้อนูนคล้ายดอกกระหล่ำ
                              ติดได้ง่ายจากการมีเพศสัมพันธ์หรือการสัมผัสร่วมไปในบริเวณที่แพร่เชื้อเมื่อไปสัมผัสบริเวณอื่นของร่างกายจึงทำให้เชื้อกระจาย
                              มีโอกาสติดได้ง่ายและเป็นซ้ำได้บ่อย
                            </li>
                            <li>
                              ไวรัสตับอักเสบบี(Hepatitis B Virus)
                              ผู้ติดเชื้อมีอาการตาเหลือง ตัวเหลือง ปัสสาวะสีเข้ม
                              ปวดท้อง คลื่นไส้ อ่อนเพลีย
                              สามารถติดต่อจากแม่สู่ทารกในครรภ์ได้
                            </li>
                          </ul>
                        </p>
                        <p>
                          อย่าเสี่ยงเลยดีกว่าเพราะในปัจจุบัน
                          มีตัวเลือกให้สามารถเช็คสุขภาพทางเพศได้ทั้งคุณและคู่นอน
                          สามารถเช็คได้ด้วยตัวเอง (STIs Self Collect)
                          วิธีนี้สำหรับคนที่ไม่สะดวกไปโรงพยาบาล
                          ต้องการความเป็นส่วนตัว
                          เรื่องสุขภาพทางเพศไม่ใช่เรื่องน่าอายหรือเรื่องที่แปลก
                          เพื่อตัวคุณและคนที่คุณรัก
                        </p>
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                                <p style={{float:"right"}}>แหล่งข้อมูล อ้างอิง</p>
                                
                                <p style={{float:"right",display:"block"}}>ข้อมูล ณ วันที่ 11 สิงหาคม 2565</p>
                                <p style={{float:"right",display:"block"}}> ที่มา : อ. นพ.ธนภพ บำเพ็ญเกียรติกุล</p>
                               <p style={{float:"right",display:"block"}}>  ศูนย์เชี่ยวชาญเฉพาะทางด้านสุขภาพคนข้ามเพศ


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

export default Blog2Thai;
