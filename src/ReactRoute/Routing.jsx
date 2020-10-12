import React from "react"
import { Component } from "react";
import {Route,Switch} from 'react-router-dom'
import About from "../Components/About/About"
import Pricing from "../Components/Pricing/Pricing"
import Products from "../Components/Products/AllProducts"
import Support from "../Components/Support/Support"
import CartItem from "../Components/Cart/Cart"
import Login from "../Components/Login/Login"
import LogOut from "../Components/Logout/LogOut"
import { AuthContext } from "../context/AuthContext";
import PrivateRoutes from "./PrivateRoutes"
import Error from './Error'



class Routing extends Component {

    render(){
        // console.log(this.context.isAuth);
        return(
            <>
            <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/about" render={()=><About/>} />
            <Route path="/pricing" render={()=><Pricing/>} />
            <Route path="/products" render={()=><PrivateRoutes/>} />
            <Route path="/support" render={()=><Support/>} />
            <Route path="/cart" render={()=><CartItem/>} />
            {/* <Route path = "/logout" render={()=><LogOut/>} /> */}
            <Route component={Error} />
            </Switch>
            </>
        )
    }
}

Routing.contextType  = AuthContext
export default Routing