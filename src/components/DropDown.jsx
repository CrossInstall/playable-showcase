import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import MenuIcon from "@material-ui/icons/Menu";

export default function DropDown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>
            <MenuIcon />
          </span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/Idle">Idle</a>
            </li>
            <li>
              <a href="/RPG">RPG</a>
            </li>
            <li>
              <a href="/Match3">Match3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
