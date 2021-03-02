import React from "react";
import Rotate from "./Rotate";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Rotate />
      <p>Copyright Twitter Inc ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
