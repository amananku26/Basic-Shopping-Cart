import React, { Component } from 'react'
import {AuthContext} from "../../context/AuthContext"
import styles from "./Cart.module.css"
class Total extends Component{
    constructor(props){
        super(props)
        this.state= {
          TotalPrice:0
        }
    }
    
    componentDidMount(){
      var arrPrice = [] , TotalSum = 0
      console.log(this.context.itemInCart);
      const {TotalPrice} = this.state
      for(var i = 0 ; i < this.context.itemInCart.length ; i++){
        console.log(this.context.itemInCart[i].price);
        arrPrice.push(Number(this.context.itemInCart[i].price))
    
      }
      console.log(typeof arrPrice[0]);
      for(var i = 0 ; i < arrPrice.length ; i++){
         TotalSum = TotalSum + arrPrice[i]
      }
      console.log(TotalSum);
      this.setState({
         TotalPrice: TotalPrice + TotalSum
        })
    }

    

    render(){
        return(
            <div className={styles.ParentOfTotalSum}>


              <h5 className={styles.zoom1} style={{marginLeft:"55px"}}>Final Price $ : {this.state.TotalPrice}</h5>
              <button className={styles.button}>Procced To Payment</button>
        </div>
        )
    }
}



Total.contextType = AuthContext

export default Total