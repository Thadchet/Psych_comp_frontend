import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        <header>
      <Navbar />
      </header>
      <Route path='/' render={() => <h1>Home</h1>}></Route>
      <Route path='/delete' render={() => <h1>Delete</h1>}></Route>
      {/* <Route path='/some-componenr' component={some_component}></Route> */}
    </div>
  );
};

export default Homepage;
