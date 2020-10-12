import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AllProducts from "../Components/Products/AllProducts"
import Products from "../Components/Products/Products"
import Error from "../ReactRoute/Error"

class PrivateRoutes extends Component {
 render(){
    //  console.log(this.context);
  return (
    <AuthContext.Consumer>
      {({ isAuth }) => {
        if (!isAuth) {
          alert("Login to access Products!");
          return <Redirect to="/" />;
        }
        return (
          <Switch>
            <Route path="/products" exact render={(props)=><AllProducts {...props}/>} />
            <Route path="/products/:id" render={(props)=><Products   {...props}/>} />
            <Route exact component={Error} />
          </Switch>
        );
      }}
    </AuthContext.Consumer>
  );
}
}
export default PrivateRoutes;
