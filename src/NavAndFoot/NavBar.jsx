import React, { Component } from 'react'
import styles from './Navbar.module.css'
import {Link, Redirect} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"

var links = [{ to: "/products", title: "Products" },{ to: "/about", title: "About" },
{ to: "/pricing", title: "Pricing" },
{ to: "/support", title: "Support" },]


class NavBar extends Component {
    

    render() {
        // console.log(this.context.handleLogout);
        const {isAuth} = this.context
        return (
            <div className={styles.NavParentDiv} style={{ fontFamily: "cursive"}}>
            <div>
               <Link to="/Home"> <img className={styles.NavIcon} src="/images/aman3.png" alt="zerodhaLogo" /></Link>
                
                <span className={styles.LinkP}>
                {
                    links.map((item) => {
                        return (
                            <span >
                                <Link className={styles.LinkNav} to={item.to}>{item.title}</Link>
                            </span>
                        )
                    } )
                }

                {
                    !isAuth ? <Link className={styles.LinkNav} to="/" > Login</Link> : <button style={{marginLeft:"25px",padding:"7px",border:"none"}} onClick={this.context.handleLogout}>LogOut</button>
                }

                <span>
                <Link to="/cart"><img className={styles.CartIcon} src="images/cart1.svg" alt="CartLogo"/></Link>
                <span style={{color:"black"}}> {this.context.itemInCart.length}</span>
                </span>
                </span>
                </div>
                </div>
                )
                }
            }


 NavBar.contextType = AuthContext           
export default NavBar