import React, { useContext, useState } from "react";
import Footer from "./Footer";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessage } from "../../../service/Api";

const Wrapper = styled(Box)`
  background: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");

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
    }
  };
  return (
    <>
      <Wrapper>
        <Component></Component>
        <Footer 
        sendText={sendText} 
        setValue={setValue} 
        value={value} />
      </Wrapper>
    </>
  );
};

export default Messages;
