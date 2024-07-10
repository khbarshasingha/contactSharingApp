"use client";
import React from "react";
import styles from "./profile.module.scss";
import { Button, TextField } from "@mui/material";
const ProfileComponent = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>Update your profile details here!</div>
      <div className={styles.profile_form}>
        <div className={styles.fields}>
          <label>Email</label>
          <TextField type="text" variant="outlined" />
        </div>
        <div className={styles.fields}>
          <label>Name</label>
          <TextField type="text" variant="outlined" />
        </div>
        <div className={styles.fields}>
          <label>Phone</label>
          <TextField type="text" variant="outlined" />
        </div>
        <div className={styles.fields}>
          <label>Link</label>
          <TextField type="text" variant="outlined" />
        </div>
        <div className={styles.fields}>
          <label>Title</label>
          <TextField type="text" variant="outlined" />
        </div>
        <div className={styles.fields}>
          <label>Company</label>
          <TextField type="text" variant="outlined" />
        </div>
      </div>
      <div className={styles.profile_buttons}>
        <Button
          sx={{ backgroundColor: "#FC6719", color: "white", width: "200px" }}
          variant="contained"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default ProfileComponent;
