import React, { useState, useEffect, useContext } from "react";
import { Box, styled, Divider } from "@mui/material";
import { getUsers } from "../../../service/Api";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  overflow: overlay;
  height: 85vh;
`;
const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;

const Conversations = () => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);
  // console.log(users);
  return (
    <>
      <Component>
        {users.map(
          (user) =>
            user.sub !== account.sub && (
              <>
                <Conversation user={user} />
                <StyleDivider />
              </>
            )
        )}
      </Component>
    </>
  );
};

export default Conversations;
