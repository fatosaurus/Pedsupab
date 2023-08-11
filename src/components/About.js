import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import about_image from "../assets/image/about_image.png";
// import about_img_1 from "../assets/image/about_img_1.png";
// import about_img_3 from "../assets/image/about_img_3.png";
import team_img_1 from "../assets/image/team_img_1.png";
import team_img_2 from "../assets/image/team_img_2.png";
import team_img_3 from "../assets/image/team_img_3.png";
import team_img_4 from "../assets/image/team_img_4.png";
import team_img_5 from "../assets/image/team_img_5.png";
import team_img_6 from "../assets/image/team_img_6.png";
import team_img_7 from "../assets/image/team_img_7.png";
import team_img_8 from "../assets/image/team_img_8.png";
import team_img_9 from "../assets/image/team_img_9.png";
import team_img_10 from "../assets/image/team_img_10.png";
import team_img_11 from "../assets/image/team_img_11.png";
import Suphanat_N from "../assets/image/Suphanat N.JPG";
import Wasinee_M from "../assets/image/Wasinee M.JPG";
import Attapon_L from "../assets/image/Attapon L.JPG"

import { Link } from "react-router-dom";
import TeamTextHighlight from "../iconComponents/TeamTextHighlight";

const About = () => {
  const [reloadKey, setReloadKey] = useState(1)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
  return (
    <div className='site-wrap'>
      <Header key={reloadKey} productscount={cart?.length > 0 ? cart?.length : ''} />
      <div className='about-page-wrap'>
        {/* <div className='top-border'></div> */}
        {/* <div className='language-chooser'>
          <div className='container'>
            <Link to='/aboutus' className='active'>
              EN
            </Link>
            <Link to='/th/aboutus'>TH</Link>
          </div>
        </div> */}

        {/* <!-- about content --> */}
        <div className='static-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 '>
                <h1 className='page-title text-right'>

                  About Us
                </h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3 graphic'>
                <img
                  src={about_image}
                  alt='Image of a person talking to a doctor about sex education'
                />
              </div>
              <div className='col-md-9 content-sec'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title'>

                      Not talking about sex, protection, and sexual health ends
                      up being more harmful than we realize.
                    </h4>
                    <p className='card-text'>

                      Focusing on sexual reproductive health, we are committed
                      to providing everyone with centralized, trusted,
                      academically, and professionally sourced sex education.
                      It's time to love yourself, starting with learning and
                      understanding your own body.
                    </p>
                    <h2 className='section-heading-primary'>

                      We're your nonjudging best friend
                    </h2>
                    <p className='card-text'>

                      and so… no matter what you're going through, concerns, or
                      questions you might have, we are only one phone call (or
                      message😉) away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className='about-team pb-0'>
          <div className='container'>
            <h2 className='primary-title'>
                <span className="circle-wrap-highlight-w">
              Meet our <span className="circle-wrap-highlight">TEAM
                <div className="circle-svg"><TeamTextHighlight /></div>
              </span>
              </span>
            </h2>
            <div className='row'>
              {/** 
              <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={team_img_1} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Chantamas Chatraporn</h4>
                  <p className='color-blue sub-title'>Manager </p>
                  <p 
                  // className='quote'
                  >จงเติบโตเป็นผู้ใหญ่ที่แข็งแรง</p>
                </div>
              </div>
*/}

              <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={team_img_10} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Sarisa G</h4>
                  <p className='color-green sub-title'>
                    Team Leader
                    <br />
                  </p>
                  {/* <p
                  // className='quote'
                  >
                    โลกนี้ไม่มีที่ยืนของคนอ่อนแอ แต่ไม่เป็นไร งั้นเรานั่งก็ได้
                  </p> */}
                </div>
              </div>

              <div className='col-md-4'>
                <div className='team-card bg-2'>
                  <div className='graphic'>
                    <img src={team_img_11} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Thitharee K </h4>
                  <p className='color-orange sub-title'>Advisor </p>
                  {/* <p
                  // className='quote'
                  >เกิดมามีชีวิตเดียว อยากทำไรก็ทำไปเถอะ</p> */}
                </div>
              </div>
              {/* <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={team_img_1} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Chantamas Chatraporn</h4>
                  <p className='color-blue sub-title'>Business Development & Pharmarcist  </p>
                  <p 
                  // className='quote'
                  >จงเติบโตเป็นผู้ใหญ่ที่แข็งแรง</p>
                </div>
              </div> */}
              <div className='col-md-4'>
                <div className='team-card bg-2'>
                  <div className='graphic'>
                    <img src={Suphanat_N} alt='Team Member'
                      style={{
                        borderRadius: '50%',
                        width: '140px',
                        height: '140px',
                      }} />
                  </div>
                  <h4 className='card-title'>Suphanat N</h4>
                  <p className='color-orange sub-title'>Creative </p>
                  {/* <p
                  // className='quote'
                  >เกิดมามีชีวิตเดียว อยากทำไรก็ทำไปเถอะ</p> */}
                </div>
              </div>
              <div className='col-md-4'>
                <div className='team-card bg-3'>
                  <div className='graphic'>
                    <img src={Attapon_L} alt='Team Member'
                      style={{
                        borderRadius: '50%',
                        width: '140px',
                        height: '140px',
                      }} />
                  </div>
                  <h4 className='card-title'>Attapon L</h4>
                  <p className='color-blue sub-title'>Creative </p>
                  {/* <p
                  // className='quote'
                  >เชื่อมั่น & ทำความดีด้วยสติ ✨</p> */}
                </div>
              </div>

              <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={team_img_8} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Vivian S</h4>
                  <p className='color-green sub-title'>Creative </p>
                  {/* <p
                  // className='quote'
                  >
                    เงื่อนไขที่ว่า แก้งานได้ 2 ครั้งมีอยู่จริง คือ “ครั้งแล้ว”
                    และ “ครั้งเล่า”
                  </p> */}
                </div>
              </div>

              <div className='col-md-4'>
                <div className='team-card bg-2'>
                  <div className='graphic'>
                    <img src={team_img_5} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Saranya P</h4>
                  <p className='color-orange sub-title'>
                    Team Coordinator
                  </p>
                  {/* <p
                  // className='quote'
                  >“ ทุกอย่างมีเวลาของมัน ”</p> */}
                </div>
              </div>
              <div className='col-md-4'>
                <div className='team-card bg-3'>
                  <div className='graphic'>
                    <img src={team_img_9} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Anchisa A</h4>
                  <p className='color-green sub-title'>
                    Content & Admin
                  </p>
                  {/* <p
                  // className='quote'
                  >
                    เพื่อนกิน เพื่อนกัน เพื่อนกินไม่ทัน เพื่อนกันเอาไปกิน
                  </p> */}
                </div>
              </div>
              <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={Wasinee_M} alt='Team Member'
                      style={{
                        borderRadius: '50%', // This makes the image a perfect circle
                        width: '140px',     // Adjust the width as needed
                        height: '140px',    // Adjust the height as needed
                      }} />
                  </div>
                  <h4 className='card-title'>Wasinee M</h4>
                  <p className='color-blue sub-title'>
                    Content & Admin
                  </p>
                  {/* <p
                  // className='quote'
                  >จงเติบโตเป็นผู้ใหญ่ที่แข็งแรง</p> */}
                </div>
              </div>

              <div className='col-md-4'>
                <div className='team-card bg-3'>
                  <div className='graphic'>
                    <img src={team_img_6} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Chosita T</h4>
                  <p className='color-blue sub-title'>Content & Admin  </p>
                  {/* <p
                  //  
                  // className='quote'

                  >เชื่อมั่น & ทำความดีด้วยสติ ✨</p> */}
                </div>
              </div>
              {/* <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={team_img_8} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Vivian Schnepp</h4>
                  <p className='color-green sub-title'>Graphic design</p>
                  <p 
                  // className='quote'
                  >
                    เงื่อนไขที่ว่า แก้งานได้ 2 ครั้งมีอยู่จริง คือ “ครั้งแล้ว”
                    และ “ครั้งเล่า”
                  </p>
                </div>
              </div> */}
              {/* <div className='col-md-4'>
                <div className='team-card bg-2'>
                  <div className='graphic'>
                    <img src={team_img_9} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Thitharee </h4>
                  <p className='color-orange sub-title'>Advisor </p>
                  <p 
                  // className='quote'
                  >เกิดมามีชีวิตเดียว อยากทำไรก็ทำไปเถอะ</p>
                </div>
              </div> */}

              {/* <div className='col-md-4'>
                <div className='team-card bg-1'>
                  <div className='graphic'>
                    <img src={team_img_10} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>Sarisa Gajaseni</h4>
                  <p className='color-green sub-title'>
                    <br />
                  </p>
                  <p 
                  // className='quote'
                  >
                    โลกนี้ไม่มีที่ยืนของคนอ่อนแอ แต่ไม่เป็นไร งั้นเรานั่งก็ได้
                  </p>
                </div>
              </div> */}
              {/* <div className='col-md-4'>
                <div className='team-card bg-2'>
                  <div className='graphic'>
                    <img src={team_img_11} alt='Team Member' />
                  </div>
                  <h4 className='card-title'>THITAREE_K</h4>
                  <p className='color-orange sub-title'>
                    <br />
                  </p>
                  <p 
                  // className='quote'
                  >
                    ไม่ต้องทำวันนี้ให้ดีที่สุด เพราะเดี๋ยวพรุ่งนี้ไม่มีอะไรให้ทำ
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <!-- Meet our TEAM Ends --> */}

        {/* <!-- Contact sec --> */}

        <section id='' className='quick-contact'>
          <h2 className='sec-title'>Contact Us</h2>
          <p>
            <b>Tel :</b> 085-5551818
          </p>
          <p>
            <b>Mail :</b> online@anewday.co.th
          </p>
          <ul className='social-icons'>
            <li>
              <Link to='#'>
                <svg
                  width='30'
                  height='28'
                  viewBox='0 0 30 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M29.3009 13.9344C29.3009 15.9045 29.3104 17.8745 29.3009 19.8446C29.2771 23.8726 26.3537 27.1071 22.1597 27.7405C21.7512 27.8014 21.3332 27.8262 20.92 27.8262C16.745 27.8329 12.5724 27.8374 8.39746 27.8262C3.68576 27.8171 -0.0023737 24.2963 1.14625e-06 19.8265C1.14625e-06 15.8977 1.14625e-06 11.9667 1.14625e-06 8.03785C1.14625e-06 3.98507 2.94006 0.712191 7.15541 0.0878192C7.58526 0.0247058 8.02698 0.00441935 8.46395 0.00441935C12.5914 -0.0023428 16.7189 -0.00234279 20.8488 0.00216531C25.1805 0.00667341 28.6644 2.90087 29.2391 6.97169C29.2914 7.35037 29.2985 7.73581 29.3009 8.119C29.3056 10.0552 29.3032 11.9937 29.3032 13.9322L29.3009 13.9344ZM14.6647 2.39822C12.6009 2.39822 10.5372 2.39597 8.47345 2.40047C8.14098 2.40047 7.80137 2.40949 7.47364 2.46133C4.56683 2.90538 2.51496 5.17972 2.51021 7.97474C2.50309 11.9035 2.50784 15.8346 2.51021 19.7634C2.51021 23.016 5.05605 25.4346 8.47583 25.4369C12.5914 25.4391 16.7094 25.4391 20.825 25.4369C24.2496 25.4369 26.7835 23.0205 26.7835 19.7634C26.7835 15.8662 26.7835 11.9712 26.7835 8.07392C26.7835 4.81907 24.2472 2.40498 20.8227 2.40047C18.7708 2.39822 16.7165 2.40047 14.6647 2.40047V2.39822Z'
                    fill='#18B0BD'
                  />
                  <path
                    d='M14.6362 21.0392C10.4921 21.0279 7.13642 17.834 7.14117 13.9074C7.14592 9.9831 10.5372 6.77784 14.6599 6.79813C18.8325 6.81841 22.1644 10.0079 22.1478 13.9637C22.1312 17.8745 18.7613 21.0505 14.6362 21.0392ZM9.66325 13.9164C9.66325 16.5379 11.8932 18.6567 14.6528 18.6544C17.4076 18.6544 19.64 16.5266 19.6376 13.9074C19.6376 11.313 17.3958 9.18967 14.6576 9.18742C11.8956 9.18516 9.66088 11.2995 9.66088 13.9187L9.66325 13.9164Z'
                    fill='#18B0BD'
                  />
                  <path
                    d='M22.4922 8.09646C21.4876 8.10547 20.6802 7.35488 20.673 6.40592C20.6659 5.45697 21.4591 4.68608 22.4542 4.67256C23.4421 4.65903 24.2662 5.42766 24.2781 6.36986C24.2899 7.3143 23.4896 8.08744 22.4922 8.09646Z'
                    fill='#18B0BD'
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <svg
                  width='31'
                  height='28'
                  viewBox='0 0 31 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.8138 8.99075C17.8138 8.08233 17.7729 7.23253 17.8258 6.38723C17.8739 5.60279 18.3791 5.20832 19.2356 5.19479C20.1161 5.18352 20.9942 5.19254 21.8747 5.19254C22.1682 5.19254 22.4617 5.19254 22.76 5.19254V-0.000976562C20.59 0.0576308 18.4393 -0.0122473 16.3222 0.208657C13.7119 0.479153 12.0808 1.98942 11.4288 4.36527C11.2436 5.03926 11.1979 5.75607 11.1618 6.45485C11.1185 7.28663 11.1522 8.12291 11.1522 9.00653H8.00781V14.9822C8.92441 14.9822 9.81696 15.0025 10.7047 14.9732C11.1113 14.9597 11.1931 15.0927 11.1931 15.4466C11.1882 17.4843 11.1858 19.5243 11.1858 21.562V27.833H17.5684V14.9732H22.2717C22.4689 12.9625 22.6638 11.0082 22.8611 8.993H17.8138V8.99075Z'
                    fill='#18B0BD'
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <svg
                  width='30'
                  height='28'
                  viewBox='0 0 30 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M27.7498 7.16503C27.0586 7.67094 26.8934 8.22102 26.8391 8.99996C26.3501 15.9964 23.0312 21.3727 15.8676 24.1994C10.8056 26.1949 5.71546 25.7713 0.842619 23.3903C0.681784 23.312 0.551375 23.1836 0.160156 22.9005C3.45943 22.9868 6.22839 22.2922 8.85825 20.4051C6.0719 19.9634 4.15711 18.807 3.22253 16.3798C4.08104 16.3457 4.76132 16.3176 5.44378 16.2895C2.72264 15.1572 1.22949 13.2982 0.907819 10.4996C1.78371 10.7044 2.56832 10.8871 3.58114 11.124C0.833919 8.01624 0.307952 5.47865 1.89456 3.3747C5.23079 6.93215 9.35597 9.05015 14.5787 9.34727C14.2375 6.72938 14.9678 4.59933 17.276 3.10368C19.3712 1.74655 22.1662 1.71644 24.1506 3.21209C25.1003 3.92679 25.8806 3.97096 26.8739 3.5594C27.5042 3.29842 28.1518 3.06955 29.0951 2.7122C28.6496 3.41887 28.3931 3.92679 28.0388 4.36444C27.6737 4.81414 27.2107 5.1996 26.5739 5.82597C27.7498 5.56297 28.6365 5.36623 29.8667 5.09119C29.0234 5.93638 28.467 6.64306 27.7519 7.16704L27.7498 7.16503Z'
                    fill='#18B0BD'
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link to='#'>
                <svg
                  width='31'
                  height='28'
                  viewBox='0 0 31 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M28.2671 10.4806C25.6593 10.1423 23.3277 9.29008 21.4059 7.45499V7.77618C21.4059 11.3243 21.4127 14.8724 21.4059 18.4205C21.3991 21.337 20.2605 23.7952 17.8723 25.641C14.9635 27.8893 11.6495 28.4289 8.14537 27.1634C4.65027 25.9001 2.55638 23.414 1.97462 19.9109C1.14386 14.9024 4.74534 10.2622 10.031 9.41427C11.1538 9.2344 12.2856 9.30292 13.4288 9.29008V14.1487C13.3518 14.1487 13.2748 14.1487 13.1979 14.1487C12.5459 14.1551 11.8895 14.1272 11.2398 14.1744C8.81088 14.3499 6.95468 16.2942 6.98637 18.5983C7.01806 20.8916 8.91501 22.7759 11.3417 22.9194C14.015 23.0757 16.2651 21.08 16.2651 18.5469C16.2651 12.4656 16.2651 6.38435 16.2651 0.305228V0.00330601H16.5073C18.0602 0.00330601 19.6131 0.0054473 21.166 -0.000976562C21.338 -0.000976562 21.4217 0.0504144 21.4987 0.191739C22.1597 1.39943 22.9724 2.50647 24.0068 3.45935C25.3515 4.69487 26.927 5.49785 28.8035 5.73554C28.9394 5.75267 29.0729 5.7805 29.2472 5.81048C28.919 7.38005 28.5975 8.92391 28.2738 10.4828L28.2671 10.4806Z'
                    fill='#18B0BD'
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <svg
                  width='31'
                  height='28'
                  viewBox='0 0 31 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M30.0127 12.879C30.0087 12.7186 30.0126 12.5602 30.0046 12.3998C29.9786 11.866 29.9546 11.3321 29.9166 10.7983C29.8866 10.3719 29.8426 9.9475 29.7926 9.52306C29.6966 8.72323 29.5946 7.91963 29.3445 7.14809C28.9584 5.95023 28.1103 5.16737 26.844 4.78254C26.398 4.64672 25.9379 4.59013 25.4778 4.54486C24.9777 4.49581 24.4756 4.4562 23.9735 4.41658C23.7074 4.39583 23.4394 4.38074 23.1713 4.36942C22.4012 4.33547 21.629 4.30151 20.8589 4.27133C20.3508 4.25247 19.8447 4.23549 19.3366 4.22794C17.7663 4.20531 16.194 4.1789 14.6237 4.17324C13.4455 4.16947 12.2693 4.19399 11.091 4.21663C10.4029 4.22983 9.71276 4.25435 9.02463 4.28265C8.45052 4.30529 7.87642 4.33358 7.30231 4.37131C6.65418 4.4147 6.00606 4.46186 5.36193 4.52788C4.82583 4.58259 4.29373 4.66182 3.76163 4.74104C3.25153 4.8165 2.79144 5.02023 2.37336 5.3013C1.65322 5.78422 1.16713 6.42748 0.941092 7.23109C0.851074 7.55366 0.791061 7.88378 0.739051 8.2139C0.659036 8.73832 0.587024 9.26463 0.529013 9.79282C0.481004 10.2323 0.452993 10.6738 0.422987 11.1133C0.330969 12.4225 0.312969 13.7316 0.338974 15.0427C0.350977 15.618 0.372978 16.1934 0.410985 16.7668C0.450993 17.3592 0.505013 17.9515 0.571026 18.5419C0.649041 19.2512 0.743047 19.9605 0.947086 20.6472C1.32516 21.9299 2.20334 22.7656 3.5576 23.1391C3.85765 23.2221 4.1737 23.256 4.48576 23.2938C4.98986 23.3541 5.49396 23.4013 6.00005 23.4466C6.37613 23.4786 6.7542 23.5013 7.13028 23.522C7.7984 23.5579 8.46654 23.5918 9.13466 23.6239C9.3427 23.6333 9.55073 23.6428 9.76077 23.6484C10.4689 23.6673 11.177 23.6861 11.8872 23.7012C12.4893 23.7144 13.0914 23.7201 13.6935 23.7314C13.7515 23.7314 13.8096 23.7427 13.8676 23.7484H17.2702C17.3162 23.7427 17.3622 23.7333 17.4102 23.7314C17.6743 23.7276 17.9383 23.7258 18.2024 23.7201C18.9825 23.705 19.7607 23.6918 20.5408 23.6673C21.241 23.6465 21.9411 23.6182 22.6412 23.5786C23.3714 23.5371 24.1015 23.4843 24.8317 23.422C25.4278 23.3711 26.0199 23.3013 26.606 23.1825C27.9583 22.9089 29.0685 21.9205 29.3965 20.6434C29.5066 20.2189 29.5806 19.7851 29.6466 19.3531C29.7306 18.8023 29.7986 18.2495 29.8566 17.6949C29.9046 17.2403 29.9346 16.7857 29.9586 16.3292C29.9846 15.8217 29.9946 15.3124 30.0146 14.805C30.0146 14.754 30.0287 14.7031 30.0347 14.6522V13.0035C30.0267 12.9601 30.0146 12.9167 30.0146 12.8733L30.0127 12.879ZM12.3113 18.1571C12.3013 18.1213 12.2933 18.0986 12.2913 18.0741C12.2873 18.0439 12.2913 18.0156 12.2913 17.9854C12.2913 15.3011 12.2913 12.6149 12.2913 9.93053V9.78905C12.3093 9.77773 12.3133 9.77395 12.3173 9.77207C12.3213 9.77207 12.3253 9.77207 12.3293 9.77207C14.8838 11.151 17.4382 12.53 19.9947 13.9108C20.0147 13.9221 20.0327 13.9353 20.0728 13.9618C17.4783 15.3652 14.9018 16.7574 12.3133 18.1571H12.3113Z'
                    fill='#18B0BD'
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </section>
        {/* <!-- Contact sec Ends --> */}
      </div>

      {/* <!-- Start footer --> */}
      <Footer />
    </div>
  );
};

export default About;
