import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style.css";
import order_product from "../assets/image/order-product.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useJwt } from "react-jwt";
import base64url from "base64url";
import { Buffer } from "buffer";
import { Stream } from "stream";
import jwt from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
// import { createHmac } from "crypto";

// import json_encode

// const token = "Your JWT";


const MyCart = () => {

  // var json_encode = require('json_encode');
  // var createHmac = require('create-hmac');
  const sign = require('jwt-encode');
  // const navigate = useNavigate();

  window.Buffer = window.Buffer || Buffer;

  const [quantity, setQuantity] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleCreditDebit = () => {
    document.querySelectorAll('#creditDebitCard')[0].style.display = "block";
  }
  useEffect(() => {
    document.querySelectorAll('#creditDebitCard')[0].style.display = "none";
  }, [])
  const initialValues = {
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  const affillateSchema = yup.object({
    cardNumber: yup.string().required("Card Number is required"),
    expiryDate: yup.string().required("expiry Date  is required"),
    cvv: yup.string().required("Cvv is required"),
  });

  

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    initialValues: initialValues,
    // validationSchema: affillateSchema,
    onSubmit: (values) => {



      console.log(cardNumber)
      console.log(expiryDate);
      console.log(cvv);
      // e.preventDefault();
      // values.cardNumber = cardNumber;
      // values.expiryDate = expiryDate;
      // values.cvv = cvv;
      values.merchantID = "764764000009347";
      values.secretKey = "0D6A706933AE782A686365CFA7C19160F65E887D55DC9F41729BB13D8B32C10A";
      values.amount = 1000;
      values.currencyCode = 'USD';
      values.description = 'item 1';
      values.invoiceNo = '1523953662'
      let value;

      const PT_dataArray = {
        //MANDATORY PARAMS
        "merchantID": values.merchantID,
        "invoiceNo": values.invoiceNo,
        "description": values.description,
        "amount": values.amount,
        "currencyCode": values.currencyCode,
      }


      
      const payload = sign(PT_dataArray, values.secretKey);
      console.log(payload);


      const options = {
        method: 'POST',
        headers: { accept: 'application/json', 'content-type': 'application/*+json' },
        body: JSON.stringify({
          'payload': payload
        })
      };

      fetch('https://sandbox-pgw.2c2p.com/payment/4.1/PaymentToken', options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          var paymentDetails = jwt(response.payload);
          console.log(paymentDetails);
          if(paymentDetails.respCode === '0000'){
            //Redirect to the payment url paymentDetails.webPaymentUrl
            window.location.replace( paymentDetails.webPaymentUrl);
          }
        }
        )
        .catch(err => console.error(err));

      
    },
  });

  return (
    <div class='site-wrap'>
      <Header />
      <div class='cart-page-inner-banner'>
        <div class='container'>
          <h1 class='page-title'>My Cart</h1>
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
                <div class='card-header text-color-pink'>My Payment Method</div>
                <div class='card-body'>
                  <div class='btn-groups'>
                    <button type='button' class='btn btn-secondary' onClick={handleCreditDebit}>
                      Credit/Debit Card
                    </button>
                    <form onSubmit={handleSubmit} method='post'>

                      <div class='row' id="creditDebitCard">
                        <div class='col-lg-12'>
                          <label for='cardNumber'>Card Number</label>
                          <input
                            type="text"
                            placeholder="Card Number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                          />
                        </div>
                        <div class='col-lg-6'>
                          <label for='expiryDate'>Expiry Date</label>
                          <input
                            type="text"
                            placeholder="Expiry Date"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div class='col-lg-6'>
                          <label for='cvv'>CVV</label>
                          <input
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                          />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                          ADD Card Details

                        </button>
                      </div>
                    </form>
                    {/* <button type='button' class='btn btn-secondary'>
                      Bank Transfer
                    </button>
                    <button type='button' class='btn btn-secondary'>
                      Promptpay/QR
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-5'>
              <div class='card bg-primary order-card-sec'>
                <div class='card-header'>Your Order</div>
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
                        Affiliate Code
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
                          <strong>Subtotal</strong>
                          <span>฿ 1,800</span>
                        </li>
                        <li class='list-group-item'>
                          <strong>Delivery</strong>
                          <span>฿ 50</span>
                        </li>
                      </ul>
                    </div>
                    <div class='col-12'>
                      <ul class='list-group list-group-flush bold-text'>
                        <li class='list-group-item'>
                          <strong>Total</strong>
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
                Confirm My Order
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

export default MyCart;
