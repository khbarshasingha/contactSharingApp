"use client";
import { useQRCode } from "next-qrcode";
import React from "react";
import styles from "./my-qr-code.module.scss";
const MyQRCodeComponent = () => {
  const { Canvas } = useQRCode();
  return (
    <div className={styles.myQrCode}>
      <div className={styles.card}>
        {" "}
        <Canvas
          text={"https://github.com/bunlong/next-qrcode"}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 500,
            color: {
              dark: "#010599FF",
              light: "",
            },
          }}
        />
      </div>
      <div className={styles.scanMe}>Scan me to get my details</div>
    </div>
  );
};

export default MyQRCodeComponent;
