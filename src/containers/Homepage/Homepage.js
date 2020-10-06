import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DeletePage from "../Deletepage/DeletePage";
import { Route } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
        <header>
      <Navbar />
      </header>
      <Route path='/' exact render={() => <h1>Home</h1>}></Route>
      {/* <Route path='/delete' render={() => <h1>Delete</h1>}></Route> */}
      <Route path='/delete' component={DeletePage}></Route>
    </div>
  );
};

export default Homepage;
