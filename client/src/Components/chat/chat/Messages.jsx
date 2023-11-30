import React, { useContext, useState, useEffect } from "react";
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
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState("");

  useEffect(() => {
    const getMessageDetail = async () => {
      let data = await getMessage(conversation._id);
      // console.log(data);
      setMessages(data);
    };
    conversation._id && getMessageDetail();
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText = async (e) => {
    // console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      // console.log(message);
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
                  <Message message={message} />
                </Container>
              );
            })}
        </Component>
        <Footer
          sendText={sendText}
          setValue={setValue}
          value={value}
          setFile={setFile}
          file={file}
        />
      </Wrapper>
    </>
  );
};

export default Messages;
