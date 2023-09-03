import React from 'react';
//import { useEffect, useState } from 'react';

const Navbar = ({ label1, label2, label3, label4, label5, label6, label7, label8, label8a, label9, label10, label11, label12, label13, label14 }) => {
 
  const smallScreenLabels = (
    <>
      <div className="Smalllabels d-flex">
      <li className="nav-item m-3">
      <a className="nav-link" href=" "><img src="https://tse4.mm.bing.net/th?id=OIP.h87NYTqkd6bzqL-wVsnyFQHaHh&pid=Api&P=0&h=180" alt="Search" height="20px" width="20px" data-bs-toggle="tooltip" title="Open Search" /></a>
      </li>
      <li className="nav-item m-3">
      <a className="nav-link" href=" "><img src="https://tse4.mm.bing.net/th?id=OIP.ivHXlSC2UMyOQyd8SZw8aQHaG2&pid=Api&P=0&h=180" alt="cabinet" height="20px" width="20px" data-bs-toggle="tooltip" title="Open Cabinet" /></a>
      </li>
      <li className="nav-item m-3" id="cart">
      <a className="nav-link" href=" ">{label14}</a>
      </li>
      <li className="nav-item m-3">
      <a className="nav-link" href=" "><img src="https://tse2.mm.bing.net/th?id=OIP.Osxj4dWzOFK8XkH7_yt_pQHaHa&pid=Api&P=0&h=180" alt="Hamburger" height="20px" width="20px" data-bs-toggle="tooltip" title="Open Menu"/> </a>
      </li>
      </div>
    </>
  );
  return (
    <>
      {/*--------------------- Bars Above Navbar ------------------------*/}

      <div className="GreyBar p-2">Trained Aesop consultations are available to provide bespoke skin care advise.&nbsp; &nbsp;
        <a className="link1" href=" "><b>Book a video consultation</b></a>
      </div>
      <div className="BlackBar p-2">
        <a className="link2" href=" ">Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400 &nbsp;&nbsp;
          <span className="plusbutton" data-bs-toggle="tooltip" title="plus">+</span></a>
      </div>

      {/*-------------------------------- Left Side Navbar -------------------------------*/}

      <nav className="navbar navbar-expand-sm bg-white m-3 p-2">
        <div className="container-fluid">
          <div className="navbar-left ml-auto">
            <ul className="navbar-nav" id="leftlabels">
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label1}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label2}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label3}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label4}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label5}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label6}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label7}</a>
              </li>
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link" href=" ">{label8a}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">{label8}</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href=" ">{label9}</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href=" ">{label10}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" "><img src="https://tse4.mm.bing.net/th?id=OIP.h87NYTqkd6bzqL-wVsnyFQHaHh&pid=Api&P=0&h=180" alt="Search" height="20px" width="20px" data-bs-toggle="tooltip" title="Open Search" /></a>
              </li>
            </ul>
          </div>
          {/* ---------------------Right Side Navbar----------------------- */}
          <div className="navbar-right mr-auto"></div>
          <ul className="navbar-nav justify-content-end" id="rightlabels">
            <li className="nav-item">
              <a className="nav-link" href=" ">{label12}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">{label13}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">{label14}</a>
            </li>
          </ul>
        </div>
        {/* -------------------Small Screen Navbar ---------------------------*/}
      <a className="navbar-brand" href="# " id="logo"><img src="https://tse2.mm.bing.net/th?id=OIP.3i_SaYlqp1_S6PuZ8uFT9QHaEc&pid=Api&P=0&h=180" height="60px" width="100px" alt="aesop-logo" data-bs-toggle="tooltip" title="Aesop" /></a>
      <ul className="navbar-nav">
      <div className="d-block d-sm-none" id="smallscreenlabels">
        {smallScreenLabels}
      </div>
      </ul>
      </nav>
    </>
  )
}

export default Navbar;