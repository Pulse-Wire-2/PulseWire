import React from 'react';
import NavBar from "../components/NavBar";
import RenderBooks from "../components/RenderBooks";
import '../css/BestSeller.css'

const BestSeller = () => {

  return (
    <>
      <NavBar />
      <h1 className='bsH1'>Don't Know What to Read? Look no Further</h1>
      <div className='mainContain'>
        <RenderBooks />
      </div>
    </>
  );
};

export default BestSeller;
