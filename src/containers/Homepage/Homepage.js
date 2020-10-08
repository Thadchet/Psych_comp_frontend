import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DeletePage from "../Deletepage/DeletePage";
import { Redirect, Route, Switch } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route path="/homepage" exact render={() => <h1>Home</h1>}></Route>
        {/* <Route path='/delete' render={() => <h1>Delete</h1>}></Route> */}
        <Route path="/delete" component={DeletePage}></Route>
        <Redirect from="/" to="homepage" />
      </Switch>
    </div>
  );
};

export default Homepage;
