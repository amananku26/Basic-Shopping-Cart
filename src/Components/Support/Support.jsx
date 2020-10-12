import React from "react"
import styles from './Support.module.css'
import styled from 'styled-components'

const Box1 = styled.div`

padding:55px

`

const Box2 = styled.div`

padding:55px
background: transparent;
`
var item = ["order","Return and refund","manage Adress","Payment Setting","Account Setting", " Digital Service"]
const Support = () => {

    return (
        <>
            <Box1><h2>Hi, What can we help you with?</h2></Box1>
            <hr/>
            <Box2><h5 style={{display:"flex"}}>
                {
                    item.map((item)=>{
                        return(
                        <div className={styles.BOx2DivItemMap} >{item}</div>
                        )
                    })
                }
                </h5>
                <hr/>
                
                  <img style={{marginTop:"55px",marginLeft:"45px",marginBottom:"55px"}} src="/images/support1.jpg" alt="suppoort"/>
                
                </Box2>
                
        </>
    )
}

export default Support