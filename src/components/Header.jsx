import React from "react";
import DropDown from "./DropDown";
import { Container, Divider } from "semantic-ui-react";

function Header() {
  // handleSubmitClick = () => {
  //   const name = this._name.value;
  //   // do something with `name`

  return (
    <div>
      <header>
        <Container Align="left">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </Container>
        <Container Align="center">
          <div
            className="logo-wrapper"
            data-content-field="site-title"
            data-nc-element="branding"
          >
            <div className="logo-image logo-header">
              <a href="/" data-ajax-loader="ajax-loader-binded">
                <h2>Playable</h2>
                <h1> Showcase </h1>
                <img
                  src="https://static1.squarespace.com/static/59b7837dd7bdce8efdb14838/t/5eba90cdad2c4f3dd50498dd/1604083380323/"
                  // width="50"
                  height="45"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </Container>
        <Container Align="right">
          <div>
            <DropDown />
          </div>
        </Container>
      </header>
    </div>
  );
}

export default Header;
