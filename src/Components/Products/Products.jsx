import axios from "axios";
import React, { Component } from "react";
import styles from './Products.module.css'
import { AuthContext } from "../../context/AuthContext"


var PaymentList = [
  "https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png",
  "https://blog.beforward.jp/wp-content/uploads/2020/04/paypal-logo.png",
  "https://s3.amazonaws.com/owler-image/logo/phonepe_owler_20200323_231011_original.png"
]
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
    // heroku json https://test-first-heroku-mocker.herokuapp.com/List
    axios.get("https://test-first-heroku-mocker.herokuapp.com/List/" + id).then((result) =>
      this.setState({
        list: result.data,
        AddingtoCart: []
      })
    );
  }

  render() {
    // console.log(this.context.handleAddCo);
    const { handleAddCo, ButtonMesg } = this.context
    const { list } = this.state;
    const { id } = list;
    console.log(list)
    return (
      <div className={styles.productMapItemparent}>
        <div className={styles.productMapItemparentChild}>
          <div className={styles.gridContainer}>
            <div className={styles.item2img}><img className={styles.imgBox} src={list.image} alt="productImage" /></div>

            <div className={styles.AfterItem1}>
              <div className={styles.item1} style={{ color: "#FF0000" }}>{list.title} <span style={{ opacity: ".5" }}>#JustHere</span> </div>
              <div className={styles.item3}>${list.price}</div>
              <div className={styles.item4}> <button onClick={() => handleAddCo(list.title, list.price, list.image, list.id)} data={this.state.list} className={styles.AddtoCart}>Add To cart</button>
                <div>
                  {
                    PaymentList.map((item) => {
                      return (
                        <img src={item} style={{ marginTop: "25px", marginLeft: "25px" }} height="30px" alt="paymentLogo" />
                      )
                    })
                  }
                </div>
                <div style={{ color: "green" }}>{ButtonMesg}</div>
              </div>
              <div className={styles.item5Description}> <span style={{ color: "#FF0000" }}>Description: </span>{list.description}</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Products.contextType = AuthContext
export default Products;