import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { getUsers } from "../../../service/Api";
import Conversation from "./Conversation";

const Conversations = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);
  console.log(users);
  return (
    <>
      <Box>
        {users.map((user) => {
          return <Conversation user={user} />;
        })}
      </Box>
    </>
  );
};

export default Conversations;
