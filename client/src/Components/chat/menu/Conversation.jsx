import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

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

const Conversation = ({ user }) => {
  const { setPerson } = useContext(AccountContext);
  const getUser = () => {
    setPerson(user);
  };
  return (
    <>
      <Component onClick={() => getUser()}>
        <ImageBox>
          <Image src={user.picture} alt="dp" />
        </ImageBox>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Component>
    </>
  );
};

export default Conversation;
