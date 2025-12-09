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
      helpText: "help text",
      userData: ""
    }

    // для взаимодейсвтия метода inputClick с состояниями и менять их
    this.inputClick = this.inputClick.bind(this)
  }



  render(){
    return(
      <div>
       <Header title="это свойство" />
       <h1>Hello World</h1>
       <h1>{this.setState.userData}</h1>
       <input placeholder={this.state.helpText} 
          onChange={event => this.setState({userData: event.target.value})}   // event.target.value — это способ получить значение элемента, на котором произошло событие.
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