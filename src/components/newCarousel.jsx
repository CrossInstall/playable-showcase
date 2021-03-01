import React from "react";
//import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

function Coverflow1() {
  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          "@media (max-width: 900px)": {
            width: "600px",
            height: "300px"
          },
          "@media (min-width: 900px)": {
            width: "960px",
            height: "600px"
          }
        }}
      >
        <img
          src="/img/iPhone.png"
          alt="Left Item"
          //data-action="https://facebook.github.io/react/"
        />
        <img
          src="/img/iPhone.png"
          alt="Center Item"
          //data-action="http://passer.cc"
        />
        <img
          src="/img/iPhone.png"
          alt="Right Item"
          //data-action="https://doce.cc/"
        />
      </Coverflow>
    </StyleRoot>
  );
}

export default Coverflow1;
