"use client";
import TextField from "@mui/material/TextField";
import styles from "./signup.module.scss";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "@mui/material";
import SignUp from "../../firebase/auth/signup";
import { useRouter } from "next/navigation";

const SignUpComponent = () => {
  const router = useRouter();

  const handleSubmit = async (email: string, password: string) => {
    const { userRes, error } = await SignUp(password, email);
    if (userRes) {
      console.log(" successfully registered");
      router.push("/my-qr-code");
    } else if (error) {
      alert(error);
    } else {
      alert(" An unexpected error occured");
    }
  };

  const signupFormik = useFormik({
    initialValues: { email: "", password: "" },

    onSubmit: (values) => {
      handleSubmit(values.email, values.password);
    },
  });

  return (
    <form className={styles.signup} onSubmit={signupFormik.handleSubmit}>
      hello from signup
      <div className={styles.email}>
        <label>Email</label>
        <TextField
          type="text"
          name="email"
          placeholder="Enter your email id"
          variant="outlined"
          value={signupFormik.values.email}
          onChange={signupFormik.handleChange}
        />
      </div>
      <div className={styles.password}>
        <label style={{ color: "white" }}>Password</label>
        <TextField
          name="password"
          type="password"
          placeholder="Enter your password"
          variant="outlined"
          value={signupFormik.values.password}
          onChange={signupFormik.handleChange}
        />
      </div>
      <div>
        <Button
          sx={{ backgroundColor: "#FC6719", color: "white" }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUpComponent;
