import React from "react";


// компоненты
class Image extends React.Component {
  render() {  
    return(
      <img src={this.props.image} alt="" className="img" />
    )
  }
}

export default Image