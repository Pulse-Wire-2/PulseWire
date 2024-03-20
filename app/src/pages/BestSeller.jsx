import React from 'react';
import NavBar from "../components/NavBar";
import RenderBooks from "../components/RenderBooks";

const BestSeller = () => {

  return (
    <>
      <NavBar />
      <h1>Don't Know What to Read?</h1>
      <h2>Look no Further</h2>
      <RenderBooks />
    </>
  );
};

export default BestSeller;
