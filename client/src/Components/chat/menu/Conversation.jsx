import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/Api";
import { formatDate } from "../../../utils/common-utils";

const Component = styled(Box)`
  display: flex;
  height: 50px;
  cursor: pointer;
  margin: 10px 0;
`;
const ImageBox = styled(Box)`
  padding: 0;
`;
const Image = styled("img")({
  width: 80,
  height: 50,
  padding: "0px 14px",
  borderRadius: "50%",
  objectFit: "cover",
});
const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;
const Text = styled(Typography)`
  font-size: 14px;
  color: rgba(0, 0, 0.6);
  margin-left: 7px;
`;

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
      console.log(data);
    };
    getConversationDetails();
  }, [newMessageFlag]);

  // console.log(message);
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  return (
    <>
      <Component onClick={() => getUser()}>
        <ImageBox>
          <Image src={user.picture} alt="dp" />
        </ImageBox>
        <Box style={{ width: "100%" }}>
          <Container>
            <Typography>{user.name}</Typography>
            {message?.text && (
              <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
            )}
          </Container>
          <Box>
            <Text>
              {/* for local */}
              {message?.text?.includes("localhost") ? "media" : message.text}
            </Text>
          </Box>
        </Box>
      </Component>
    </>
  );
};

export default Conversation;
