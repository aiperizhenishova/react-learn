import React from "react";
import Button from "./Button";

// компоненты
class Header extends React.Component {
  render() {  
    return(
      <header className="header">
        {this.props.title}
        <Button text = "Button"/>
      </header>
    )
  }
}

export default Header