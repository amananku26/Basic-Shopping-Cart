import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext"
import styled from "styled-components";
import styles from './Products.module.css'
const Box = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: orange;
`;

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // List: [],
      finalAmountSortPrice: 1000,
      order: "",
      electronics: "electronics",
      men: "men clothing",
      women: "women clothing",
      jewelery: "jewelery",
      selecb: "All",
      All: "All"
    };
  }

  handleAsc = () => {
    const { order } = this.state
    this.setState({
      order: "asc"
    })
    console.log(this.state.order);
    // this.componentDidMount()
  }

  handleDesc = () => {
    const { order } = this.state
    this.setState({
      order: "DESC"
    })
    console.log(this.state.order);
    // this.componentDidMount()
  }

  // componentDidMount() {
  //   // http://localhost:3000/tasks for json mocker server change the url
  //   //  heroku json https://test-first-heroku-mocker.herokuapp.com/List
  //   axios.get("https://test-first-heroku-mocker.herokuapp.com/List").then((res) =>
  //     this.setState({
  //       List: res.data
  //     })
  //   );
  // }
  handleChange = (e) => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  handleSelect = (e) => {
    console.log(e.target.name);
    const { selectb } = this.state
    this.setState({
      selectb: e.target.value
    });
  }

  render() {
    const {List} = this.context
    const {  order } = this.state;
    const { selectb } = this.state
    console.log(selectb);
    var itemPrice = Number(this.state.finalAmountSortPrice)
    console.log(typeof itemPrice);
    // filter of price and category , asc and desc sorting
    let Filterd = List.filter(item => (item.price < itemPrice)).filter(item => {
      if (selectb == "All") {
        return (item.category)
      }
      else if (selectb == undefined) {
        return (item.category)
      } else {
        return (item.category == selectb)
      }
    })
      .sort((a, b) => {
        if (order == "asc") {
          return a.price - b.price
        } else if (order == "DESC") {
          return b.price - a.price
        }
      });
    return (
      <div>
        <div style={{ float:"left" , marginTop:"55px" }}>
          {/* sort section start here */}
          <h3 style={{marginLeft:"25px"}}> Filters</h3>
          <hr/>
          <div style={{ margin: "25px" }} className={styles.sortSection}>
            Sort By Price From $ 0 to <br />
            <input
              name="finalAmountSortPrice"
              value={this.state.finalAmountSortPrice}
              onChange={this.handleChange}
              placeholder="Enter the Final Value" />
          </div>
          <hr/>
          {/* sort section ends here */}
          <div style={{ margin: "15px" }}>
            Select a Order of Price: <br/>
          <button style={{  border: "none", padding: "8px" }} onClick={this.handleAsc}>Low to High</button>
            <button style={{ marginLeft: "15px", border: "none", padding: "8px" }} onClick={this.handleDesc}>High to Low</button>
          </div>
          <hr/>
          <div style={{ width: "200px", margin: "20px" }}>
            Sort Category
  <select style={{ padding: "8px" }} onChange={this.handleSelect}>
              <option name="All" value="All">All</option>
              <option name="women" value="women clothing">women clothing</option>
              <option name="men" value="men clothing">men clothing</option>
              <option name="jewelery" value="jewelery">jewelery</option>
              <option name="electronics" value="electronics">electronics</option>
            </select>
          </div>
          <hr/>
        </div>
        <div className={styles.FlexOfItems}>

          {Filterd.map((item) => {
            return (
              <>
                <Box className={styles.card} style={{ margin: "8px", display: "flex" }}>
                  <ul style={{ margin: "7px" }}>
                    
                    <div className={styles.imgHoverZoom}>
                      <img src={item.image} height="160px" alt="logo" />
                    </div>
                    <Link to={`/products/${item.id}`}>
                      <div className={styles.ItemTitleInAllProducts}>{item.title}</div>
                    </Link>
                    <div className={styles.ItemPriceInAllProducts}>
                      ${item.price}
                    </div>
                    <div></div>
                  </ul>
                </Box>

              </>
            );
          })}

        </div>
                <div style={{float:"none"}}></div>
      </div>
    );
  }
}
AllProducts.contextType = AuthContext
export default AllProducts;
