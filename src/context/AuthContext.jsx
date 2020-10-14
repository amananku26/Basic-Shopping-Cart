import React from "react";
import data from "./ListItems.js";
import axios from "axios";

const AuthContext = React.createContext();

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isAuth: false,
      itemInCart:[],
      ButtonMesg:"",
      List:[]
    };
  }

  checkAuthentication = ({ email, password }) => {
    // console.log(email, password);
    axios
      .post("https://reqres.in/api/login", {
        email,
        password
      })
      .then((res) =>
        this.setState({
          token: res.data.token,
          isAuth: true
        })
      );
  };

  componentDidMount() {
    // http://localhost:3000/tasks for json mocker server change the url
    //  heroku json https://test-first-heroku-mocker.herokuapp.com/List
    axios.get("https://test-first-heroku-mocker.herokuapp.com/List").then((res) =>
      this.setState({
        List: res.data
      })
    );
  }


  handleLogout = () => {
    this.setState({
      isAuth:false,
      itemInCart:[]
    })
  }
  handleAddCo = (title,price,image,id) => {
      console.log(id,title,price,image)
      const {itemInCart} = this.state
      const item = {
        id: id,
        title: title,
        price:price,
        image:image
    }
    this.setState({
      itemInCart: [...itemInCart, item]
      // ButtonMesg:"Your Item has Been Added To The Cart "
  })
  }

  render() {
    // console.log(this.state.itemInCart);
    const { isAuth, token , itemInCart,ButtonMesg,List} = this.state;
    const { checkAuthentication ,handleLogout ,handleAddCo} = this;
    const value = { isAuth, token, checkAuthentication, data ,List, handleLogout,itemInCart,handleAddCo,ButtonMesg};
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthContextProvider };
