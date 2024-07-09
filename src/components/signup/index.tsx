"use client";
import TextField from "@mui/material/TextField";
import styles from "./signup.module.scss";
import { useFormik } from "formik";
import React from "react";
import { Button } from "@mui/material";
import SignUp from "../../firebase/auth/signup";
import SignIn from "@/firebase/auth/signin";

const SignUpComponent = () => {
  const handleSubmit = async (email: string, password: string) => {
    const{error, result}= await SignUp(password, email);

    if (error) {
      alert("Error on signup");
    }
    console.log(result);
  };

  const signupFormik = useFormik({
    initialValues: { email: "", password: "" },

    onSubmit: (values) => {
      handleSubmit(values.email, values.password);
    },
  });


  return (
    <form className={styles.signup} onSubmit={signupFormik.handleSubmit} >
      <div className={styles.email}>
        <label>Email</label>
        <TextField
          type="text"
          name="email"
          placeholder="Enter your email id"
          // id="outlined-basic"
          variant="outlined"
          value={signupFormik.values.email}
          onChange={signupFormik.handleChange}
        />
      </div>
      <div className={styles.password}>
        <label>Password</label>
        <TextField
        name="password"
          type="password"
          placeholder="Enter your email id"
          // id="outlined-basic"
          variant="outlined"
          value={signupFormik.values.password}
          onChange={signupFormik.handleChange}
        />
      </div>
      <div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUpComponent;
