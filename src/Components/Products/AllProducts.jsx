import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
      List: []
    };
  }

  componentDidMount() {
     // http://localhost:3000/tasks for json mocker server change the url
    axios.get("https://fakestoreapi.com/products").then((res) =>
      this.setState({
        List: res.data
      })
    );
  }

  render() {
    const { List } = this.state;
    return (
      <div className={styles.FlexOfItems}>
        {List.map((item) => {
          return (
            <>
              <Box style={{ border: "1px solid grey", margin: "8px" ,display:"flex"}}>
                <ul style={{ margin: "7px" }}>
                  <Link to={`/products/${item.id}`}>
                    <div>{item.title}</div>
                  </Link>
                  <div>
                    <img src={item.image} height="150px" alt="logo" />
                  </div>
                  <div>
                    ${item.price} {item.id}{" "}
                  </div>
                  <div></div>
                </ul>
              </Box>
            </>
          );
        })}
      </div>
    );
  }
}

export default AllProducts;
