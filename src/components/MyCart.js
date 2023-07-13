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

  let [quantity, setQuantity] = useState(1);
  const [today, setDate] = React.useState(new Date());
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [affiliateCode, setAffiliate] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  let total = 0;
  const [reloadKey, setReloadKey] = useState(1)
  const locale = 'en';
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });


  const handleMinusClick = (value) => {
    console.log(value);
    const foundIndex = cart.findIndex(obj => obj.id === value.id);
    // const foundObject = cart.find(obj => obj.id === value.id);
    
    if (foundIndex !== -1 && value.quantity > 1) {
      cart[foundIndex].quantity = cart[foundIndex].quantity - 1;
      console.log('Object updated:', cart);
      setCart(JSON.parse(JSON.stringify(cart)));
      console.log(cart);
      localStorage.setItem('cart',JSON.stringify(cart)); 
    } else {
      console.log('Object not found');
    }
    // if(value)
    // if (quantity > 1) {
    //   quantity = quantity - 1;
    // }
    // setReloadKey(Math.random());
  };

  const handlePlusClick = (value) => {
    console.log(value);
    
    // const value.id = 2;
    // const newName = 'Updated Object 2';
    const foundIndex = cart.findIndex(obj => obj.id === value.id);
    // const foundObject = cart.find(obj => obj.id === value.id);
    
    if (foundIndex !== -1) {
      cart[foundIndex].quantity = cart[foundIndex].quantity + 1;
      console.log('Object updated:', cart);
      setCart(JSON.parse(JSON.stringify(cart)));
      console.log(cart); 
      localStorage.setItem('cart',JSON.stringify(cart));
    } else {
      console.log('Object not found');
    }

    // quantity = quantity + 1;
    // // localStorage.setItem('cart')
    // setReloadKey(Math.random());
  };

  const handleCreditDebit = () => {
    document.querySelectorAll('#creditDebitCard')[0].style.display = "block";
  }
  useEffect(() => {

    document.querySelectorAll('#creditDebitCard')[0].style.display = "none";
    // let cartlocal = JSON.parse(localStorage.getItem('cart'));
    // cart.push(cartlocal)
    console.log(cart);
  }, [])

  const initialValues = {
    name: '',
    phone: '',
    address: '',
    province: '',
    district: '',
    postalCode: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    affiliateCode: '',
    invoiceNo: ''
  };

  const affillateSchema = yup.object({
    name: yup.string().required('Your name is required'),
    phone: yup.string().required("Mobile Number is required"),
    address: yup.string().required("Address is required"),
    province: yup.string().required("Province is required"),
    district: yup.string().required("district is required"),
    postalCode: yup.string().required("postalCode is required"),
    email: yup.string()
      .required("email is required")
      .email("Email should be in correct format"),
    cardNumber: yup.string().required("Card Number is required"),
    expiryDate: yup.string().required("expiry Date  is required"),
    cvv: yup.string().required("Cvv is required"),
  });



  const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    // validationSchema:{affillateSchema},
    initialValues: initialValues,
    validationSchema: affillateSchema,
    onSubmit: (values) => {
      console.log(values, 'values...>');


      console.log(cardNumber)
      console.log(expiryDate);
      console.log(cvv);
      
      values.cardNumber = cardNumber;
      values.expiryDate = expiryDate;
      values.cvv = cvv;
      values.affiliateCode = affiliateCode
      values.merchantID = "764764000009347";
      // secretKey = "0D6A706933AE782A686365CFA7C19160F65E887D55DC9F41729BB13D8B32C10A";
      values.amount = total;
      values.currencyCode = 'USD';
      values.description = 'item 1';
      // values.invoiceNo = ;
      let value;

      // const PT_dataArray = {
      //   //MANDATORY PARAMS
      //   "merchantID": values.merchantID,
      //   "invoiceNo": values.invoiceno,
      //   "description": values.description,
      //   "amount": values.amount,
      //   "currencyCode": values.currencyCode,
      // }



      const payload = sign(values, '0D6A706933AE782A686365CFA7C19160F65E887D55DC9F41729BB13D8B32C10A');
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
          if (paymentDetails.respCode === '0000') {
            //Redirect to the payment url paymentDetails.webPaymentUrl
            window.location.replace(paymentDetails.webPaymentUrl);
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
          <form onSubmit={handleSubmit} method='post'>
            <div class='row'>
              <div class='col-lg-7'>

                <div class='card card-shipping-address'>
                  <div class='card-header'>My Shipping Address</div>
                  <div class='card-body'>
                    {/* <form> */}
                    <div class='row'>
                      <div class='col-lg-6'>
                        <label for='name'>Name</label>
                        <input type='text' class='form-control' id='name'
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <p className="error">
                          {errors.name && touched.name && errors.name}
                        </p>
                      </div>
                      <div class='col-lg-6'>
                        <label for='phone'>Phone Number</label>
                        <input type='text' class='form-control' id='phone'
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <p className="error">
                          {errors.phone && touched.phone && errors.phone}
                        </p>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-lg-12'>
                        <label for='address'>Address</label>
                        <input type='text' class='form-control' id='address'
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <p className="error">
                          {errors.address && touched.address && errors.address}
                        </p>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-lg-6'>
                        <label for='province'>Province</label>
                        <select class='form-select' id='province'
                          value={values.province}
                          onChange={handleChange}
                          onBlur={handleBlur}>
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
                        <p className="error">
                          {errors.province && touched.province && errors.province}
                        </p>
                      </div>
                      <div class='col-lg-6'>
                        <label for='district'>District</label>
                        <select class='form-select' id='district'
                          value={values.district}
                          onChange={handleChange}
                          onBlur={handleBlur}>
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
                        <p className="error">
                          {errors.district && touched.district && errors.district}
                        </p>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-lg-6'>
                        <label for='postalCode'>Post Code</label>
                        <input type='text' class='form-control' id='postalCode'
                          value={values.postalCode}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        <p className="error">
                          {errors.postalCode && touched.postalCode && errors.postalCode}
                        </p>
                      </div>
                      <div class='col-lg-6'>
                        <label for='email'>Email Address</label>
                        <input type='email' class='form-control' id='email'
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <p className="error">
                          {errors.email && touched.email && errors.email}
                        </p>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div class='card card-payment-method'>
                  <div class='card-header text-color-pink'>My Payment Method</div>
                  <div class='card-body'>
                    <div class='btn-groups'>
                      <button type='button' class='btn btn-secondary' onClick={handleCreditDebit}>
                        Credit/Debit Card
                      </button>
                      {/* <form onSubmit={handleSubmit} method='post'> */}
                      <div className="card-body">
                        <div class='row' id="creditDebitCard">

                          <div class='col-lg-12'>

                            <label for='cardNumber'>Card Number</label>
                            <input
                              type="text"
                              class='form-control'
                              id='cardNumber'
                              placeholder="Card Number"
                              value={values.cardNumber}
                              onChange={handleChange}
                            />
                            <p className="error">
                              {errors.cardNumber && touched.cardNumber && errors.cardNumber}
                            </p>
                          </div>
                          <div class='col-lg-6'>
                            <label for='expiryDate'>Expiry Date</label>
                            <input
                              type="text"
                              class='form-control'
                              id='expiryDate'
                              placeholder="Expiry Date"
                              value={values.expiryDate}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <p className="error">
                              {errors.expiryDate && touched.expiryDate && errors.expiryDate}
                            </p>
                          </div>
                          <div class='col-lg-6'>
                            <label for='cvv'>CVV</label>
                            <input
                              type="text"
                              id='cvv'
                              class='form-control'
                              placeholder="CVV"
                              value={values.cvv}
                              onChange={handleChange}
                            />
                            <p className="error">
                              {errors.cvv && touched.cvv && errors.cvv}
                            </p>
                          </div>
                          <div class='col-lg-6'>
                            <label for='invoiceNo'>Invoice No</label>
                            <input
                              type="text"
                              id="invoiceNo"
                              className='form-control'
                              placeholder="Invoice No"
                              value={ Date.now()}
                              onChange={handleChange}
                            />
                            <p className="error">
                              {errors.invoiceNo && touched.invoiceNo && errors.invoiceNo}
                            </p>
                          </div>
                          {/* <button type='submit' className='btn btn-primary'>
                            ADD Card Details

                          </button> */}
                        </div>
                      </div>

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
                      {/* {console.log(cart[0].name)} */}
                      {cart.map((item, index) => {
                        total = total + item.quantity * item.price
                        // quantity = item.quantity
                        // setQuantity(item.quantity)
                        return (
                          <div class='card-body d-flex' key={reloadKey}>
                            <div class='graphic'>
                              <img src={order_product} alt='' />
                            </div>
                            <div class='info'>
                              <h5 class='card-title'>{item.name}</h5>
                              <p class='card-text'>
                                {item.desc}
                              </p>

                              {/* <!-- quantity --> */}
                              <div class='input-group quantity-btns'>
                                <span class='input-group-btn'>
                                  <button
                                    type='button'
                                    class='btn btn-outline-secondary btn-number minus'
                                    data-type='minus'
                                    id='minus-btn'
                                    onClick={() => handleMinusClick(item)}
                                  >
                                    -
                                  </button>
                                </span>
                                <input
                                  id="qty"
                                  type='number'
                                  class='form-control input-number'
                                  // value='1'
                                  id='quantity'
                                  value={item.quantity}
                                />
                                <span class='input-group-btn'>
                                  <button
                                    type='button'
                                    class='btn btn-outline-secondary btn-number plus'
                                    data-type='plus'
                                    id='plus-btn'
                                    onClick={() => handlePlusClick(item)}
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>)

                      })}
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
                          value={affiliateCode}
                          onChange={(e) => setAffiliate(e.target.value)}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div class='col-12'>
                        <ul class='list-group list-group-flush'>
                          <li class='list-group-item'>
                            <strong>Subtotal</strong>
                            <span>฿ {total}</span>
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
                            <span>฿ {total + 50}</span>
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
                <Link to='' class='btn btn-trinary' onClick={handleSubmit}>
                  Confirm My Order
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Start footer --> */}
      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default MyCart;
