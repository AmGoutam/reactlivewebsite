import React from 'react'
import Navbar from './conponents/Navbar';
import Home from './conponents/Home';
import About from './conponents/About';
import Contact from './conponents/Contact';

import Service from './conponents/Service';
import Language from './conponents/Language';
import Footer from './conponents/Footer';

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <Language/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Mainpage;
