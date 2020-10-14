import React, { Component } from "react"
import styles from "./Cart.module.css"
import {AuthContext} from "../../context/AuthContext"
import Total from "./Total"
import styled from "styled-components";
const Box = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: orange;
`;

class CartItem extends Component {
    constructor(props){
        super(props)
        this.state= {
          TotalPrice:0
        }
    }
    
    render(){
        const {itemInCart} = this.context
        console.log(itemInCart);
        // calculation of total price
        
        if(itemInCart.length<1){
            return(
               <>
                   <img src="/images/emptycart3.png" width="100%" height="700px" alt="emptyCarticons"/>

               </>
            )
        }
        else {
    return(
        <>
          <div className={styles.FlexOfItems}>
        {itemInCart.map((item) => {
          return (
            <>
              <Box style={{ border: "1px solid grey",textAlign:"center"}}>
                  <div style={{float:"left",marginLeft:"100px"}}>
                    <img className={styles.zoom} src={item.image} height="50px" alt="logo" />
                  </div>
                  <div style={{marginTop:"15px",marginLeft:"15px",float:"left"}}>
                  <div>{item.title}</div>
                  <div>${item.price}</div>
                 </div>
                 <div>
                 </div>
              </Box>
            </>
          );
        })}
      </div>
      <div>
                <Total />
              </div>
        </>
    )
        }
}

}
CartItem.contextType = AuthContext
export default CartItem