import React, { useContext } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
const Container = styled(Box)`
  height: 75%;
`;

const ChatBox = () => {
  const { person } = useContext(AccountContext);

  return (
    <>
      <Container>
        <ChatHeader person={person} />
        <Messages person={person} />
      </Container>
    </>
  );
};

export default ChatBox;
