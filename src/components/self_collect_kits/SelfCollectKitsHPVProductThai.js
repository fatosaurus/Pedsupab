import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../style.css";
import prod_add from "../../assets/image/prod_add.png";
import misc from "../../assets/image/misc.png";

const SelfCollectKitsHPVProductThai = () => {
  return (
    <div class='site-wrap'>
      <Header />

      <div class='inner_content_outer'>
        <div class='sep1'></div>
        <div class='bandcamp_info'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-12'>
                <div class='bandcamp_des'>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>{" "}
                      {/* <Link to=''>Home</Link>{" "} */}
                    </li>
                    <li>
                      <Link to='/selfcollectkit'>ชุดเก็บตัวอย่างด้วยตัวเอง</Link>{" "}
                      {/* <Link to=''>Self Collect Kits</Link>{" "} */}
                    </li>
                    <li>
                      <Link to='/selfcollectkit/hpv'>HPV Kits</Link>{" "}
                      {/* <Link to=''>HPV Kits</Link>{" "} */}
                    </li>
                    <li class='selected'>
                      <span>เกี่ยวกับชุดตรวจ เอชพีวี</span>{" "}
                    </li>
                  </ul>
                </div>

                <div class='prod_des'>
                  <div class='prod_add_info'>
                    <div class='prod_add_slider'>
                      <img src={prod_add} alt='' />
                    </div>
                  </div>
                  <div class='prod_add_content'>
                    <h2>
                      <span>ชุดเก็บตัวอย่างด้วยตัวเอง</span>เกี่ยวกับชุดตรวจ เอชพีวี
                    </h2>
                    <div class='price_info'>
                      <div class='price_text'>฿ 1200</div>
                    </div>
                    <div class='prod_cont_des'>
                      <h3>เกี่ยวกับสินค้า</h3>
                      <p>
                      ชุดตรวจ HPV ที่คุณสามารถใช้ได้ด้วยตัวเองของ AVA ใช้งานง่าย ไม่เจ็บ และเป็นส่วนตัว เมื่อเก็บตัวอย่างด้วยตัวเองตามขั้นตอน ส่งไปยังห้องปฏิบัติของ winmed โดยใช้กล่องเดิมส่งฟรีที่ไปรษญีย์ไทย เพียงหนึ่งอาทิตย์ คุณจะได้รับผลการตรวจที่ระบุถึงการมีเชื้อ HPV สายพันธุ์ที่เสี่ยงสูง และหากผลเป็นบวกก็สามารถหาคำปรึกษาทางการแพทย์ที่เหมาะสมได้ทันที.{" "}
                      </p>
                    </div>
                    <div class='prod_dtn_option'>
                      <div class='prod_inc'>
                        <span class='prod_inc_opt'> - </span>
                        <div class='prod_inc_inp'>
                          <input type='text' placeholder='1' />
                        </div>
                        <span class='prod_inc_opt'> + </span>
                      </div>
                      <div class='add_tocard_opt'>
                        <button type='button' class='addtocart_but'>
                        ใส่ตะกร้า
                        </button>
                      </div>
                      <div class='buynow_opt'>
                        <Link to='/mycart' type='button' class='buynow_btn'>
                        {/* <Link to='' type='button' class='buynow_btn'> */}
                        สั่งซื้อชุดตรวจ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='hpv_continfo'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='inner_head_des2'>
                <h2>More about the AVA HPV Kit</h2>
              </div>
              <div class='inner_cont_wrap'>
                <ul>
                  <li>
                    AVA
                    (เอวา)ใช้เก็บสิ่งตรวจเพื่อตรวจวิเคราะห์การติดเชื้อทางเพศสัมพันธ์คุณลักษณะเฉพาะ
                  </li>
                  <li>
                    {" "}
                    เป็นชุดน้ำยาเก็บสิ่งที่ตรวจจากปากมดลูกชั้นใน ในเพศหญิง
                    สำหรับใช้ทดสอบกับชุดตรวจแอพติม่าเอชพีวี คลามัยเดีย
                    ทราโคมาติส และ นีสซีเรีย โทโนเรีย{" "}
                  </li>
                  <li>
                    เป็นชุดน้ำยาเก็บสิ่งส่งตรวจแต่ละชุดประกอบด้วยหลอดเก็บสิ่งส่งตรวจที่มีน้ำยารักษาสภาพปริมาตร
                    2.9 มล.ต่อหลอด ไม้ทำความสะอาดและไม้ เก็บสิ่งส่งตรวจ
                  </li>
                  <li>
                    เป็นน้ำยาที่ผ่านการรับรองจากองค์การอาหารและยาประเทศสหรัฐอเมริกา
                    (US-FDA)
                  </li>
                </ul>
                <div class='inner_cont_view'>
                  <h3>EQUIPMENT</h3>
                  <ol>
                    <li>
                      อุปกรณ์เก็บสิ่งส่งตรวจ Sterile swab ความยาว 14.8 CM จำนวน
                      1 ชิ้น บรรจุในซองปิดสนิท
                    </li>
                    <li>
                      หลอดน้ำยาเพื่อรักษาสิ่งส่งตรวจ Transport tube
                      ประกอบด้วยน้ำยารักษาสภาพสิ่งส่ง ตรวจปริมาตร 2.9 ml
                    </li>
                    <li>คู่มือการเก็บสิ่งส่งตรวจ</li>
                    <li>ใบลงทะเบียนนำส่งตัวอย่าง</li>
                    <li>Barcode สำหรับติดบนหลอดเก็บตัวอย่าง</li>
                    <li>
                      บรรจุภัณฑ์สำหรับใส่และส่งหลอดเก็บตัว
                      อย่างไปยังห้องปฏิบัติการเพื่อตรวจวิเคราะห์
                    </li>
                  </ol>
                </div>
                <div class='inner_cont_view'>
                  <h3>CAUTION</h3>
                  <ol>
                    <li>ไม่ควรใช้อุปกรณ์ขณะตั้งครรภ์หรือมีประจำ เดือน</li>
                    <li>อุปกรณ์นี้สำหรับการใช้เพียงครั้งเดียวเท่านั้น</li>
                    <li>ห้ามใช้เมื่อบรรจุภัณฑ์มีการฉีกขาดหรือชำรุด</li>
                    <li>
                      ห้ามใช้ผลิตภัณฑ์อื่นๆ ทางช่องคลอดภายใน 48 ชั่วโมง
                      ก่อนการเก็บสิ่งส่งตรวจ
                    </li>
                    <li>
                      หากมีอาการเจ็บปวด มีเลือดออก หรือ
                      มีสารคัดหลั่งผิดปกติจากช่องคลอด ไม่ควรใช้อุปกรณ์นี้
                      และควรปรึกษาแพทย์
                    </li>
                    <li>
                      หลังเก็บสิ่งส่งตรวจแล้วต้องนำส่งภายใน 60 วัน
                      ที่อุณหภูมิห้อง
                    </li>
                    <li>
                      หากเก็บสิ่งส่งตรวจไม่ถูกวิธีอาจส่งผลกระทบต่อความแม่นยำของการทดสอบได้
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Banner ends --> */}
      <div class='howitowrk_wrap addpaddint_top'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='positive_info'>
                <h2>ทำยังไงถ้าตรวจพบเชื้อ?</h2>
                <p>
                ไม่ต้องกังวล - เราจะดูแลคุณอย่างเต็มที่ มาพูดคุยกับเรา สำรวจรายชื่อสถานบริการทางการแพทย์และคลินิกพาร์ทเนอร์ที่อยู่ใกล้คุณได้เลย หรือโทรหาเราเพื่อรับการปรึกษา
                  <span>
                    <img src={misc} alt='' />
                  </span>
                </p>

                <div class='def_btnopt2'>
                  <Link to='#' class='learn_more_btn'>
                  เรียนรู้เพิ่ม{" "}
                  </Link>
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

export default SelfCollectKitsHPVProductThai;
