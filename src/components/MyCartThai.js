import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import order_product from "../assets/image/order-product.png";
import { Link } from "react-router-dom";

const MyCartThai = () => {   
  const [quantity, setQuantity] = useState(1);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div class='site-wrap'>
      <Header />
      <div class='cart-page-inner-banner'>
        <div class='container'>
          <h1 class='page-title'>สินค้าของฉัน</h1>
        </div>
      </div>
      <div class='cart-container-wrap'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-7'>
              <div class='card card-shipping-address'>
                <div class='card-header'>My Shipping Address</div>
                <div class='card-body'>
                  <form>
                    <div class='row'>
                      <div class='col-lg-6'>
                        <label for='name'>Name</label>
                        <input type='text' class='form-control' id='name' />
                      </div>
                      <div class='col-lg-6'>
                        <label for='phone'>Phone Number</label>
                        <input type='text' class='form-control' id='phone' />
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-lg-12'>
                        <label for='address'>Address</label>
                        <input type='text' class='form-control' id='address' />
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-lg-6'>
                        <label for='province'>Province</label>
                        <select class='form-select' id='province'>
                          <option value=''>Select Province</option>
                          <option value='Ontario'>Ontario</option>
                          <option value='Quebec'>Quebec</option>
                          <option value='British Columbia'>
                            British Columbia
                          </option>
                          <option value='Alberta'>Alberta</option>
                          <option value='Manitoba'>Manitoba</option>
                          <option value='Saskatchewan'>Saskatchewan</option>
                          <option value='New Brunswick'>New Brunswick</option>
                          <option value='Nova Scotia'>Nova Scotia</option>
                          <option value='Prince Edward Island'>
                            Prince Edward Island
                          </option>
                          <option value='Newfoundland and Labrador'>
                            Newfoundland and Labrador
                          </option>
                        </select>
                      </div>
                      <div class='col-lg-6'>
                        <label for='district'>District</label>
                        <select class='form-select' id='district'>
                          <option value=''>Select District</option>
                          <option value='Toronto'>Toronto</option>
                          <option value='Montreal'>Montreal</option>
                          <option value='Vancouver'>Vancouver</option>
                          <option value='Calgary'>Calgary</option>
                          <option value='Winnipeg'>Winnipeg</option>
                          <option value='Regina'>Regina</option>
                          <option value='Fredericton'>Fredericton</option>
                          <option value='Halifax'>Halifax</option>
                          <option value='Charlottetown'>Charlottetown</option>
                          <option value="St. John's">St. John's</option>
                        </select>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-lg-6'>
                        <label for='postcode'>Post Code</label>
                        <input type='text' class='form-control' id='postcode' />
                      </div>
                      <div class='col-lg-6'>
                        <label for='email'>Email Address</label>
                        <input type='email' class='form-control' id='email' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class='card card-payment-method'>
                <div class='card-header text-color-pink'>ดำเนินการชำระเงิน</div>
                <div class='card-body'>
                  <div class='btn-groups'>
                    <button type='button' class='btn btn-secondary'>
                      Credit/Debit Card
                    </button>
                    <button type='button' class='btn btn-secondary'>
                      Bank Transfer
                    </button>
                    <button type='button' class='btn btn-secondary'>
                      Promptpay/QR
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-5'>
              <div class='card bg-primary order-card-sec'>
                <div class='card-header'>รายการ</div>
                <div class='card-body'>
                  <div class='card order-product-card'>
                    <div class='card-body d-flex'>
                      <div class='graphic'>
                        <img src={order_product} alt='' />
                      </div>
                      <div class='info'>
                        <h5 class='card-title'>AVA Self Collecting Kit</h5>
                        <p class='card-text'>
                          The AVA Self Collecting Kit allows for at-home
                          screening of cervical cancer, STIs, etc.
                        </p>
                        {/* <!-- quantity --> */}
                        <div class='input-group quantity-btns'>
                          <span class='input-group-btn'>
                            <button
                              type='button'
                              class='btn btn-outline-secondary btn-number minus'
                              data-type='minus'
                              id='minus-btn'
                              onClick={handleMinusClick}
                            >
                              -
                            </button>
                          </span>
                          <input
                            type='number'
                            class='form-control input-number'
                            // value='1'
                            id='quantity'
                            value={quantity}
                          />
                          <span class='input-group-btn'>
                            <button
                              type='button'
                              class='btn btn-outline-secondary btn-number plus'
                              data-type='plus'
                              id='plus-btn'
                              onClick={handlePlusClick}
                            >
                              +
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- info --> */}
                  <div class='row'>
                    <div class='col-12'>
                      <label for='affiliate-code' class='form-label'>
                      โค้ดส่วนลด
                      </label>
                      <input
                        type='text'
                        id='affiliate-code'
                        class='form-control'
                      />
                    </div>
                    <div class='col-12'>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>
                          <strong>ยอดทั้งหมด</strong>
                          <span>฿ 1,800</span>
                        </li>
                        <li class='list-group-item'>
                          <strong>การจัดส่ง</strong>
                          <span>฿ 50</span>
                        </li>
                      </ul>
                    </div>
                    <div class='col-12'>
                      <ul class='list-group list-group-flush bold-text'>
                        <li class='list-group-item'>
                          <strong>สรุปค่าสินค้า</strong>
                          <span>฿ 1,850</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='row actions'>
            <div class='col-12'>
              <Link to='' class='btn btn-trinary'>
              ยืนยันคำสั่งซื้อ
              </Link>
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

export default MyCartThai;
