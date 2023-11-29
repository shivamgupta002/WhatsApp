import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversation } from "../../../service/Api";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  height: 75%;
`;

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
      // console.log(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <>
      <Container>
        <ChatHeader person={person} />
        <Messages person={person} conversation={conversation} />
      </Container>
    </>
  );
};

export default ChatBox;
