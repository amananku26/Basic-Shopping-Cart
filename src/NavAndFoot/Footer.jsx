import React, { Component } from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
var thList = ["Products", "Most Search items ", "Point OF Sale", "Social Media"]
var products = ["Mens", "Womens", "Kids", 'Watch', "TV"]
var MostSearchitems = ["Jenas", "Smart Watch", "Shoes"]
var PointOFSaleList = ["Point of sale", "Features", "Hardware"]
var SocialMedia = ["FaceBook", "Twitter" , "Instagram" ]
class Footer extends Component {


    render() {
        return (
            <div className={styles.FooterMainParentDiv}>
                {/* head */}
                {/* thList */}
                <tr className={styles.ParentOfFooterHeadMap}>
                    {
                        thList.map((item) => {
                            return (
                                <>
                                    <th ><div className={styles.itemHead}>{item}</div></th>

                                </>
                            )
                        })
                    }

                </tr>
                <table>
                    {/* Products */}
                    <tr style={{ float: "left", marginLeft: "205px", marginTop: "15px", color: "white" }}>
                        {
                            products.map((items) => {
                                return (
                                    <>
                                        <Link className={styles.FooterLink} to={`/products/${items}`}> <li>{items}</li></Link>

                                    </>
                                )
                            })
                        }
                    </tr>
                     {/* MostSearchitems */}
                    <tr style={{ float: "left", marginLeft: "195px", marginBottom: "155px", marginTop: "15px", color: "white" }}>
                        {
                            MostSearchitems.map((items) => {
                                return (
                                    <>
                                        <Link className={styles.FooterLink} to={`/MostSearchitems/${items}`}> <li>{items}</li></Link>

                                    </>
                                )
                            })
                        }
                    </tr>
                     {/* PointOFSaleList */}
                    <tr style={{ float: "left", marginLeft: "135px", marginTop: "15px", color: "white" }}>
                        {
                            PointOFSaleList.map((items) => {
                                return (
                                    <>
                                        <Link className={styles.FooterLink} to={`/PointOFSaleList/${items}`}> <li>{items}</li></Link>

                                    </>
                                )
                            })
                        }
                    </tr>
                    {/* SocialMedia */}
                    <tr style={{ float: "left", marginLeft: "155px", marginTop: "15px", color: "white" }}>
                        {
                            SocialMedia.map((items) => {
                                return (
                                    <>
                                        <Link className={styles.FooterLink} to={`/SocialMedia/${items}`}> <li>{items}</li></Link>

                                    </>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>
        )
    }
}

export default Footer