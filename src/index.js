import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App'    //импортирует app из компонента app
import './css/main.css'
                                 

// document.getElementById("app") — это DOM-объект, с которым React теперь работает(в index.html)
// createRoot(...) показывает React, с каким DOM-элементом он будет взаимодействовать.
const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App />)
