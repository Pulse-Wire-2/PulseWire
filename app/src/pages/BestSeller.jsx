import React from 'react';
import NavBar from "../components/NavBar";
import {BooksBanner, RenderBooks} from "../components/RenderBooks";
import Footer from '../components/Footer';
import '../css/BestSeller.css'

const BestSeller = () => {

  return (
    <>
      <NavBar />
      <BooksBanner />
      <div className='mainContain'>
        <RenderBooks />
      </div>
      <Footer />
    </>
  );
};

export default BestSeller;
