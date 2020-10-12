import { render } from '@testing-library/react';
import React, { Component } from 'react'
import styles from "./Banner.module.css"

class Banner extends Component {

    render(){
        return(
           <div className={styles.ParentBanner} style={{ fontFamily: "cursive"}}>
             <div className={styles.BannerText}>
                 Get Upto 50% off on this Big Sale Day Hurry!
             </div>

           </div>
        )
    }
}


export default Banner