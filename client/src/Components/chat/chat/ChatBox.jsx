import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { Box, styled } from "@mui/material";
const Container = styled(Box)``;

const ChatBox = () => {
  return (
    <>
      <Container>
        <ChatHeader />
        <Messages />
      </Container>
    </>
  );
};

export default ChatBox;
