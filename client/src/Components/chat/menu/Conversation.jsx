import React from "react";
import { Box, Typography } from "@mui/material";

const Conversation = ({ user }) => {
  return (
    <>
      <Box>
        <Box>
          <img src={user.picture} alt="dp" />
        </Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Conversation;
