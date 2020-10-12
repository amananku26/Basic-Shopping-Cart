import React, { Component } from "react"
import styles from "./Cart.module.css"
import {AuthContext} from "../../context/AuthContext"
import styled from "styled-components";
const Box = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: orange;
`;

class CartItem extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    



    render(){
        const {itemInCart} = this.context
        console.log(itemInCart);
        if(itemInCart.length<1){
            return(
                <h1>Your Cart Is Empty</h1>
            )
        }
        else {
    return(
        <>
          <div className={styles.FlexOfItems}>
        {itemInCart.map((item) => {
          return (
            <>
              <Box style={{ border: "1px solid grey", margin: "8px" ,display:"flex"}}>
                <ul style={{ margin: "7px" }}>
                  <div>{item.title}</div>
                  <div>
                    <img src={item.image} height="150px" alt="logo" />
                  </div>
                  <div>
                    ${item.price}
                  </div>
                  <div></div>
                </ul>
              </Box>
            </>
          );
        })}
      </div>
        </>
    )
        }
}

}
CartItem.contextType = AuthContext
export default CartItem