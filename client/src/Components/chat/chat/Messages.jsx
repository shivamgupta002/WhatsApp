import React, { useContext, useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Message from "./Message";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessage, newMessage } from "../../../service/Api";

const Wrapper = styled(Box)`
  background: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 76vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 0.5% 1%;
`;

const Messages = ({ person, conversation }) => {
  const scrollRef = useRef();
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getMessageDetail = async () => {
      let data = await getMessage(conversation._id);
      // console.log(data);
      setMessages(data);
    };
    conversation._id && getMessageDetail();
  }, [person._id, conversation._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const sendText = async (e) => {
    // console.log(e);
    const code = e.keyCode || e.which;
    let message = {};
    if (code === 13) {
      message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      // console.log(message);
      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setValue("");
      setNewMessageFlag(true);
    }
  };
  return (
    <>
      <Wrapper>
        <Component>
          {messages &&
            messages.map((message) => {
              return (
                <Container>
                  <Message message={message} ref={scrollRef} />
                </Container>
              );
            })}
        </Component>
        <Footer sendText={sendText} setValue={setValue} value={value} />
      </Wrapper>
    </>
  );
};

export default Messages;
