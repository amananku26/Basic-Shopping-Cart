import { render } from '@testing-library/react';
import React, { Component } from 'react'
import styles from "./Banner.module.css"

class Banner extends Component {

    render(){
        return(
           <div className={styles.ParentBanner} style={{ fontFamily: "cursive"}}>
             <div className={styles.BannerText}>
             Invite friends to Big Fasion Festival & get up to ₹150 MynCash for every person who visits
             </div>

           </div>
        )
    }
}


export default Banner