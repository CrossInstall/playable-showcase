import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import MyCarousel from "./Carousel";
import Coverflow1 from "./newCarousel";
import CenterMode from "./Slider";

function App() {
  return (
    <div>
      <Header />
      <CenterMode />
      <Footer />
    </div>
  );
}

export default App;
