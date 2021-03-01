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
                  <img className="logo-img" src="/img/crossinstall-logo.png" />
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
