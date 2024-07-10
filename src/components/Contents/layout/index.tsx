"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  styled,
  MenuProps,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MyQRCodeComponent from "@/components/myQRCode";
import ProfileComponent from "../profile";

const StyledMenu = styled((props: MenuProps) => (
  <Menu elevation={0} {...props} />
))(({ theme }) => ({
  // "& .MuiPopover-root": {
  //   "& .MuiMenu-root": {
  "& .MuiPaper-root": {
    background: "#404146c9",
    color: "white",
    position: "relative",
    width: "300px",
    top: "64px !important",
    left: "0px !important",
    borderRadius: "0 !important",
  },
}));

const HomeLayout = () => {
  const [page, setPage] = useState("p");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div>
        <AppBar elevation={0} position="fixed" sx={{ background: "#1C4F4A" }}>
          <Toolbar variant="regular">
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>My QRCode</MenuItem>
              </StyledMenu>
            </div>

            <Typography variant="h6" color="inherit" component="div">
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        {page == "QRCode" ? <MyQRCodeComponent /> : <ProfileComponent />}
      </div>
    </div>
  );
};
export default HomeLayout;
