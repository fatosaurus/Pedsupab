import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import affiliate_left_img from "../assets/image/affiliate-left-img.png";

const AffiliatesThai = () => {


  const showCharacterLimit = (textarea, display_id) => {
    const maxCharacters = 150;
    let currentCharacters = textarea.value.length;
    const characterCountElement = document.getElementById(display_id);
  
    characterCountElement.textContent = `${currentCharacters} / ${maxCharacters}`;
  
    textarea.addEventListener("keyup", () => {
      currentCharacters = textarea.value.length;
      characterCountElement.textContent = `${currentCharacters} / ${maxCharacters}`;
  
      if (currentCharacters > maxCharacters) {
        textarea.value = textarea.value.substring(0, maxCharacters);
      }
    });
  };

  useEffect(() => {
    const textarea = document.getElementById("why-join");
    const displayId = "why-join-count";
    showCharacterLimit(textarea, displayId);
  }, []);
  
  
  return (
    <div class='site-wrap'>
      <Header />
      <div class='affiliate-page-inner bg-gray'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-md-6 ps-0'>
              <div class='card graphic'>
                <img src={affiliate_left_img} alt='Image' />
              </div>
            </div>
            <div class='col-md-6 d-flex flex-wrap'>
              <div class='card content-sec'>
                <h5 class='card-title'>
                {/* Join Our Affiliate Programme */}
                เข้าร่วมโปรแกรมพันธมิตรของเรา
                
                  </h5>
                <p class='card-text'>
                  {/* Become part of the movement to create a sexually healthy
                  society */}
                  มาร่วมกันจะสร้างสังคมที่มีสุขภาพทางเพศที่ดีด้วยกัน
                </p>
                <form action='/join-affiliate-programme' method='post'>
                  <div class='mb-3'>
                    <label for='first-name' class='form-label'>
                      {/* First Name */}
                      ชื่อจริง
                   
                    </label>
                    <input
                      type='text'
                      id='first-name'
                      class='form-control'
                      name='first_name'
                    />
                  </div>
                  <div class='mb-3'>
                    <label for='last-name' class='form-label'>
                      {/* Last Name */}
                      นามสกุล
                   

                    </label>
                    <input
                      type='text'
                      id='last-name'
                      class='form-control'
                      name='last_name'
                    />
                  </div>
                  <div class='mb-3'>
                    <label for='email' class='form-label'>
                      {/* Email */}
                      อีเมล์
                     
                    </label>
                    <input
                      type='email'
                      id='email'
                      class='form-control'
                      name='email'
                    />
                  </div>
                  <div class='mb-3'>
                    <label for='confirm-email' class='form-label'>
                      {/* Confirm Email */}
                      ยืนยันอีเมล์
                  
                    </label>
                    <input
                      type='email'
                      id='confirm-email'
                      class='form-control'
                      name='confirm_email'
                    />
                  </div>
                  <div class='mb-3'>
                    <label for='social-media-links' class='form-label'>
                      {/* Your Social Media Links */}
                      โซเชีบลมีเดียของท่าน
                    </label>
                    <input
                      type='text'
                      id='social-media-links'
                      class='form-control'
                      name='social_media_links'
                    />
                  </div>
                  <div class='mb-3'>
                    <label for='why-join' class='form-label'>
                      {/* Why do you want to join our programme? */}
                      ทำไมถึงอยากเข้าร่วม
                   
                    </label>
                    <textarea
                      id='why-join'
                      class='form-control'
                      rows='3'
                      name='why_join'
                    ></textarea>
                    <div class='text-right form-label'>
                      <small class='form-text text-muted' id='why-join-count'>
                        Limit 150 characters
                        
                      </small>
                    </div>
                  </div>
                  <div class='mb-3'>
                    <button type='submit' class='btn btn-primary'>
                      {/* Join */}
                      สมัคร
                     
                    </button>
                  </div>
                </form>
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

export default AffiliatesThai;
