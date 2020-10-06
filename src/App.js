import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Homepage></Homepage>
    </BrowserRouter>
  );
};

export default App;
