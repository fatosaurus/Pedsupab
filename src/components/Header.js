import React, { useEffect } from "react";
import "../style.css";
import logo from "../assets/image/logo.png";
import cart from "../assets/image/icons/cart.svg";
import { Link, NavLink } from "react-router-dom";
const Header = () => {




  const handleMenuClose = () => {
    // e.preventDefault();
    document.body.classList.remove("menu_on");
  };

  const handleLanguage = (e) => {
    console.log(e.target.textContent);
    localStorage.setItem("language", e.target.textContent);
  }

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      document.body.classList.toggle("menu_on");
    };

  

    document
      .querySelectorAll(".hambarger-menu-header")[0]
      .addEventListener("click", handleClick);

    document
      .querySelectorAll(".menu-close-btn")[0]
      .addEventListener("click", handleMenuClose);

    return () => {
      document
        .querySelectorAll(".hambarger-menu-header")[0]
        .removeEventListener("click", handleClick);

      document
        .querySelectorAll(".menu-close-btn")[0]
        .removeEventListener("click", handleMenuClose);
    };
  }, []);

  return (
    <header className='site-header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 col-4 brand'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div className='col-lg-9 col-8 header-right-column'>
            <nav className='main-nav-menu'>
              <ul className='nav-menu'>
                
                <li>
                  <NavLink to='/knowledge'  onClick={handleMenuClose}>
                 
                    KNOWLEDGE
                  </NavLink>
                </li>
                <li className="has_submenu">
                  <NavLink to='/selfcollectkit' className="" onClick={handleMenuClose}>
                    SELF COLLECT KITS
                  </NavLink>
                  <ul>
                    <li><NavLink to={'/selfcollectkit/hpv'} onClick={handleMenuClose}>HPV</NavLink></li>
                    <li><NavLink to={'/selfcollectkit/sti_open'} onClick={handleMenuClose}>STI</NavLink></li>
                  </ul>
                </li>
                <li >
                  <NavLink to='/faqs' className="" onClick={handleMenuClose}>
                    
                    FAQs
                  </NavLink>
                </li>
                <li >
                  <NavLink to='/aboutus' className="" onClick={handleMenuClose}>
                   
                    ABOUT US
                  </NavLink>
                </li>
                <li >
                  <NavLink to='/affiliates' className="" onClick={handleMenuClose}>
                 
                    AFFILIATES
                  </NavLink>
                </li>
                <li>
                  
                    <NavLink to={'/'} className="" onClick={handleLanguage}>EN</NavLink> | 
                    <NavLink to={'/th'} onClick={handleLanguage}> TH </NavLink>
                  
                </li>
              </ul>
              <Link to='' className='menu-close-btn'>
                &times;
              </Link>
              <div className='hambarger-menu-header-wrap'>
                <Link to='' className='hambarger-menu-header'>
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
                </Link>
                <span className='text'>Menu</span>
              </div>
            </nav>
            <div className='utility-links'>
              <Link to='/mycart'>
                <img src={cart} alt='' />
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
