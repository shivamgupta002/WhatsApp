import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { MoreVert, Search } from "@mui/icons-material";

const Header = styled(Box)`
  height: 47px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 40,
  width: 50,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 15px !important;
`;

const Status = styled(Typography)`
  margin-left: 15px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;
const RightComponent = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 6px;
    font-size: 37px;
  }
`;

const ChatHeader = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Header>
        <Image src={account.picture} alt="dp" />
        <Box>
          <Name>Name</Name>
          <Status>Online Status</Status>
        </Box>
        <RightComponent>
          <Search />
          <MoreVert />
        </RightComponent>
      </Header>
    </>
  );
};

export default ChatHeader;
