import React from "react";
import ReactDOM from "react-dom";
import TestForm from "./TestForm.js";
import TestPass from "./TestPass.js";
var moment = require('moment');
console.log(moment().format());

ReactDOM.render(<div><TestForm/><TestPass/></div>,document.getElementById("content"));