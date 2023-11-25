import React from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Component=styled(Box)`
height:100vh;
background-color:#DCDCDC;
`

const Messenger = () => {
  return (
    <>
      <Component>
        <Header>
          <Toolbar></Toolbar>
        </Header>
      </Component>
      <LoginDialog />
    </>
  );
};

export default Messenger;
