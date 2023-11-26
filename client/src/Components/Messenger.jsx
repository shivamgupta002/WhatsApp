import React, { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        {account ? (
          <ChatDialog />
        ) : (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <LoginDialog />
          </>
        )}
      </Component>
    </>
  );
};

export default Messenger;
