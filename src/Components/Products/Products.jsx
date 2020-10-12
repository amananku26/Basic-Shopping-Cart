import axios from "axios";
import React, { Component } from "react";
import styles from './Products.module.css'
import { AuthContext } from "../../context/AuthContext"
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      list: [],
      AddingtoCart: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    // http://localhost:3000/tasks for json mocker server change the url
    axios.get("https://fakestoreapi.com/products/" + id).then((result) =>
      this.setState({
        list: result.data,
        AddingtoCart: []
      })
    );
  }

  render() {
    // console.log(this.context.handleAddCo);
    const {handleAddCo,ButtonMesg} = this.context
    const { list } = this.state;
    const { id } = list;
    console.log(list)
    return (
      <div className={styles.productMapItemparent}>
          <div className={styles.productMapItemparentChild}>
          <div className={styles.gridContainer}>
             <div className={styles.item1}>{list.title}</div>
                 <div className={styles.item2}><img src={list.image} height="250px" alt="productImage"/></div>
                    <div className={styles.item3}>${list.price}</div>  
               <div className={styles.item4}> <button onClick={()=>handleAddCo(list.title,list.price,list.image,list.id)} data={this.state.list} className={styles.AddtoCart}>Add To cart</button> 
               <div style={{color:"green"}}>{ButtonMesg}</div>
               </div>
                  <div className={styles.item5}>{list.description}</div>
                      </div>
          </div>
    
      </div>
    );
  }
}

Products.contextType = AuthContext
export default Products;