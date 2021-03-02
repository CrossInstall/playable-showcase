import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="preview-header">
      <header>
        <h1>
          <div
            className="logo-wrapper"
            data-content-field="site-title"
            data-nc-element="branding"
          >
            <div className="logo-image">
              <a href="/" data-ajax-loader="ajax-loader-binded">
                <h3 className="logo-header">
                  <img
                    src="https://static1.squarespace.com/static/59b7837dd7bdce8efdb14838/t/5eba90cdad2c4f3dd50498dd/1604083380323/"
                    // width="50"
                    height="50"
                    alt="logo"
                  />
                </h3>
              </a>
            </div>
          </div>
          Playable Showcase{"     "}
          <button type="button" className="btn btn-outline-dark">
            <MenuIcon />
          </button>
        </h1>
      </header>

      <div>
        <button type="button" className="btn rotate-btn">
          Rotate
        </button>
        <button type="button" className="btn android-btn">
          Android
        </button>
        <button type="button" className="btn ipad-btn">
          iPad
        </button>
        <button type="button" className="btn iphone-btn">
          iPhone
        </button>
      </div>
    </div>
  );
}

export default Header;
