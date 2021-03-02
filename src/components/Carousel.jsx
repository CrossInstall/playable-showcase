import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <div className="clr view advertiser-preview-container iphone-portrait">
      <Carousel>
        <Carousel.Item interval={1000}>
          <iframe
            title="Idle Miner"
            src="https://creatives.crossinstall.com/fluff_idle_p4/2ec8679c792d6c5243000000/portrait.html?dev_nomraid=1"
            // id="advertiser-preview-iframe"
            // className="advertiser-preview-iframe portrait"
            // scrolling="no"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <iframe
            title="Idle Miner 2"
            src="https://creatives.crossinstall.com/fluff_idle_p4/2ec8679c792d6c5243000000/portrait.html?dev_nomraid=1"
            // id="advertiser-preview-iframe"
            // className="advertiser-preview-iframe portrait"
            // scrolling="no"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            title="Idle Miner 3"
            src="https://creatives.crossinstall.com/fluff_idle_p4/2ec8679c792d6c5243000000/portrait.html?dev_nomraid=1"
            // id="advertiser-preview-iframe"
            // className="advertiser-preview-iframe portrait"
            // scrolling="no"
          ></iframe>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
