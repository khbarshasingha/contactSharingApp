'use client'

import React, { useState } from "react"
import styles from "./register.module.scss"
import SignInComponent from "../signin";
import SignUpComponent from "../signup";
import { Button, colors } from "@mui/material";

const RegisterHome=()=>{
    const [isSignIn, setIsSignIn]=useState(true);
    const buttonStyle={
        background:"transparent",
        border:"none",
        // color:"#2d7881"
    }
return(
    <div className={styles.registerHome}>
        <div className={styles.registerHome_leftImage}>
            <img src="/images/register/Contactus.png" width={"100%"}/>
        </div>
        <div className={styles.registerHome_card}>
        <div className={styles.tabs}>
            <Button sx={buttonStyle} onClick={()=>{setIsSignIn(true)}}>Sign Up</Button>
            <Button sx={buttonStyle} onClick={()=>{setIsSignIn(false)}}> Sign In</Button>
        </div>
        <div className={styles.content}>
            {isSignIn? (<SignInComponent/>):(<SignUpComponent/>) }
        </div>
        </div>
       
    </div>
)
}
export default RegisterHome;