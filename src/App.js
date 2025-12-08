import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import photo from "./images/0x0.webp"


// компонент
class App extends React.Component {
  helpText = "help text"

  render(){
    return(
      <div>
       <Header title="это свойство" />
       <h1>Hello World</h1>
       <input placeholder={this.helpText} 
           onClick={this.inputClick} onMouseEnter={this.mouseOver}  /> 
       <p>{1 + 9}</p>
       <p>{this.helpText === "help text" ? "yes" : "no"}</p>
       <Image image = {photo} />
     </div> 
     ) 
  }


  inputClick() {console.log("clicked")}
  mouseOver() {console.log("mouse over")}

}
  
export default App  // экспортирует