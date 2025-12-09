import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import photo from "./images/0x0.webp"



// компонент
class App extends React.Component {

  // состояние
  constructor(props){
    super(props)
    this.state = {
      helpText: "help text"
    }

    // для взаимодейсвтия метода inputClick с состояниями и менять их
    this.inputClick = this.inputClick.bind(this)
  }



  render(){
    return(
      <div>
       <Header title="это свойство" />
       <h1>Hello World</h1>
       <input placeholder={this.state.helpText} 
           onClick={this.inputClick} onMouseEnter={this.mouseOver}  /> 
       <p>{1 + 9}</p>
       <p>{this.state.helpText === "help text" ? "yes" : "no"}</p>
       <Image image = {photo} />
     </div> 
     ) 
  }


  inputClick() {
    this.setState({ helpText: "changed"})   // обращается к состоянию с новыям значением
    console.log("clicked")
  }
  mouseOver() {console.log("mouse over")}

}
  
export default App  // экспортирует