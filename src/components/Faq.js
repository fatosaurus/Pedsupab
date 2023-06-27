import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import faq_col_1 from "../assets/image/faq-col-1.jpg";
import faq_col_2 from "../assets/image/faq-col-2.png";
import faq_col_3 from "../assets/image/faq-col-3.png";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className='site-wrap'>
      <Header />
      <section className='inner-banner faq-banner bg-light-blue'>
        <h1 className='font-2 banner-title'>
          KNOWLEDGE <br />
          IS POWER
        </h1>
      </section>
      <div className='container'>
        <div className='search-box mt-50'>
          <input
            type='text'
            className='form-control'
            placeholder='Search for anything'
          />
          <button className='btn btn-search'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 35 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27.0234 13.666C27.0234 20.3254 21.3707 25.8319 14.2617 25.8319C7.15264 25.8319 1.5 20.3254 1.5 13.666C1.5 7.00656 7.15264 1.5 14.2617 1.5C21.3707 1.5 27.0234 7.00656 27.0234 13.666Z'
                stroke='black'
                stroke-width='3'
              />
              <line
                y1='-1.5'
                x2='13.4894'
                y2='-1.5'
                transform='matrix(0.722026 0.691866 -0.722026 0.691866 22.2617 22.6672)'
                stroke='black'
                stroke-width='3'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='faq-flex-column'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card active'>
                <div className='graphic'>
                  <img src={faq_col_1} alt='' />
                </div>
                <h4 className='card-title'>HPV</h4>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='graphic'>
                  <img src={faq_col_2} alt='' />
                </div>
                <h4 className='card-title'>STIs</h4>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <div className='graphic'>
                  <img src={faq_col_3} alt='' />
                </div>
                <h4 className='card-title'>Sexual Health</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='faq-sec'>
        <div className='container'>
          <div className='pill-meta'>
            <h2 className='font-1 f-32'>Topics</h2>
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
          </div>

          <h2 className='font-1 f-36'>Frequently Asked Questions</h2>
          <p className='font-1 f-20 color-blue-light'>
            Start with the questions everyone asks
          </p>

          <div className='accordion mb-5 accordion-flush' id="faq_accordion_list">
            <div className='accordion-item'>
              <h4 className='accordion-header'>
                <button
                  className='accordion-button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                >
                  What are some key symptoms of STIs?
                </button>
              </h4>
              <div id='collapseOne' className='accordion-collapse collapse show' data-bs-parent="#faq_accordion_list">
                <div className='accordion-body'>
                  If you're worried because you think you've got an STI, go for
                  a check-up at a sexual health clinic as soon as you can. Do
                  not have sex, including oral sex, without using a condom until
                  you've had a check-up. You can have an STI without knowing it
                  and infect your partner during sex. STI symptoms:
                  <ul>
                    <li>
                      an unusual discharge from the vagina, penis, or anus
                    </li>
                    <li>pain when peeing</li>
                    <li>
                      lumps or skin growths around the genitals or bottom (anus)
                    </li>
                    <li>a rash</li>
                    <li>unusual vaginal bleeding</li>
                    <li>itchy genitals or anus</li>
                    <li>blisters and sores around your genitals or anus</li>
                    <li>warts around your genitals or anus</li>
                    <li>
                      warts in your mouth or throat, but this is very rare
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h4 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                >
                  How do I prevent weight gain from hormonal birth control?
                </button>
              </h4>
              <div id='collapseTwo' className='accordion-collapse collapse' data-bs-parent="#faq_accordion_list">
                <div className='accordion-body'>Coming Soon</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h4 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                >
                  How do I ask a new sexual partner to get STI tested without
                  breaching trust?
                </button>
              </h4>
              <div id='collapseThree' className='accordion-collapse collapse' data-bs-parent="#faq_accordion_list">
                <div className='accordion-body'>Coming Soon</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h4 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseFour'
                >
                  Do I need to get a HPV Vaccination?
                </button>
              </h4>
              <div id='collapseFour' className='accordion-collapse collapse' data-bs-parent="#faq_accordion_list">
                <div className='accordion-body'>Coming Soon</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h4 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseFive'
                >
                  How do you contract STI/STDs?
                </button>
              </h4>
              <div id='collapseFive' className='accordion-collapse collapse' data-bs-parent="#faq_accordion_list">
                <div className='accordion-body'>Coming Soon</div>
              </div>
            </div>
          </div>

          <div className='actions'>
            <p className='text-center'>
              <Link to='' className='link-text'>
                More FAQs
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className='faq-btn-img'>
        <img src='image/faq-bot-img.svg' alt='' />
      </div>

      {/* <!-- Start footer --> */}
      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default Faq;
