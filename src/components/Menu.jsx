import React, { useState } from "react";

function Menu() {
  // this.setState({ clickEvent: event });

  function handleClick() {
    const menu = useState();

    menu.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  return <div></div>;
}

export default Menu;
