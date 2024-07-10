"use client";

import React, { useState } from "react";
import styles from "./register.module.scss";
import SignInComponent from "../signin";
import SignUpComponent from "../signup";
import { Button, colors } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const RegisterHome = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const buttonStyle = {
    background: "transparent",
    border: "none",
    color: "white",
  };
  const [value, setValue] = React.useState("signIn");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={styles.registerHome}>
      <div className={styles.registerHome_leftImage}>
        <img src="/images/register/Contactus.png" width={"100%"} />
      </div>
      <div className={styles.registerHome_card}>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              sx={{
                "&.MuiButtonBase-root": {
                  "&.MuiTab-root": { color: "white" },
                },
              }}
              value="signIn"
              label="Sign In"
            />
            <Tab
              sx={{
                "&.MuiButtonBase-root": {
                  "&.MuiTab-root": { color: "white" },
                },
              }}
              value="signUp"
              label="Sign Up"
            />
          </Tabs>
        </div>

        <div className={styles.content}>
          {value == "signIn" ? <SignInComponent /> : <SignUpComponent />}
        </div>
      </div>
    </div>
  );
};
export default RegisterHome;
