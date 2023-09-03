import React from 'react';
import Carousel from './Carousel';
import Quotediv from './Quotediv';
import Footer from './Footer';

const Body = () => {
  return (
    <>
    <div className='container-fluid backgroundDiv'>
    <div className='textDiv'>
    <p>Bar Soaps</p>
    <h3>A body care classic, reimagined Bar Soaps</h3>
    <h6>Breathing new life into the humble bar soap are Nurture, 
    Polish and Refresh—three additions to the range, 
    each imparting a unique constellation of benefits.</h6><br></br>
    <button className='btn btn-outline-light text-dark p-3' id="barbutton">Discover Bar Soaps <span id="arrow">&rarr;</span></button>
    </div>
    </div>
     <Carousel/>
     <Quotediv/>
     <Footer/>
     </>
  )
}

export default Body;