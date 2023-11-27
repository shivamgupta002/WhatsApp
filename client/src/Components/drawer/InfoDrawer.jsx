import React from "react";
import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 20,
  width: "24.5%",
  height: "95%",
  boxShadow: "none",
};
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #fff;
  display: flex;

  & > svg {
    margin-top: auto;
    font-weight: 600;
    margin-left: 10px;
    margin-bottom: 17px;
  }
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 500;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const Text = styled(Typography)`
  font-size: 18px;
`;

// ------------------------------------------------------------------------------------
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBack onClick={() => setOpen(false)} />
          <Text>Profile</Text>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
