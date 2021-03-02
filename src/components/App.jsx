import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import MyCarousel from "./Carousel";

function App() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <Footer />
    </div>
  );
}

export default App;
