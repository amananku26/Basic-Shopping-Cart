import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import styles from "./Login.module.css";
import {Route} from 'react-router-dom'
import LogOut from "../Logout/LogOut"
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { checkAuthentication, isAuth } = this.context;
    checkAuthentication({ email, password });
    // const value = { isAuth, email, password, checkAuthentication, data };
  };

  render() {
    const { isAuth } = this.context;
    if (isAuth) {
      return (
        <Redirect to="products"/>
      )
    }
    else {
    return (
      <div className={styles.LoginStyle}>
        <h3 style={{ fontFamily: "cursive"}}>Login Portal</h3>
        <form onSubmit={this.handleSubmit} className={styles.LoginStyleChild} >
          Username:
          <input
            className={styles.Input1Form}
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="Enter Email"
          /> <br />
         Password
          <input
            className={styles.Input2Form}
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Enter Password"
          />
          <br />
          <input 
          className={styles.LoginButtonForm}
          type="submit" value="SUBMIT" />
        </form>
      </div>
    );
    }
  }
}


Login.contextType = AuthContext;
export default Login;
