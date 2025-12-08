import React from "react";
import * as ReactDOMClient from 'react-dom/client';

// ReactDOM.render(<div>
//     <h1>Hello</h1>
//     <h2>Hello</h2>
// </div>, document.getElementById("app"))



// // ReactDOM.render(React.createElement('input', {
// //     placeholder: "help text"
// // }), document.getElementById("app"))

// ReactDOM.render(<input placeholder="help" />, document.getElementById("app"))


//create functions 
const inputClick = () => console.log("clicked")
const mouseOver = () => console.log("mouse over")

// create variables 'elements' with event handlers which shows hint text
// and 'app' is a DOM element where react will render(put) elements. 
const helpText ="help text"
const elements = (<div>
    <h1>Hello World</h1>
    <input placeholder={helpText} 
        onClick={inputClick} onMouseEnter={mouseOver}  /> 
    <p>{1 + 9}</p>
    <p>{helpText === "help text" ? "yes" : "no"}</p>
</div>)


// document.getElementById("app") — это DOM-объект, с которым React теперь работает.
// createRoot(...) показывает React, с каким DOM-элементом он будет взаимодействовать.
const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(elements)