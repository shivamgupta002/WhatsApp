import React, { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { Chat } from "@mui/icons-material";
import { AccountContext } from "../../../context/AccountProvider";

//components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 54px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-item: center;
`;
const MessageIcon = styled(Chat)`
  font-size: 40px;
`;

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
  & > * {
    font-size: 35px;
    margin-left: 10px;
    padding: 8px;
    color: #000;
  }
  & :first-child {
    margin-right: 5px;
  }
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  cursor: "pointer",
});

const Header = () => {
  const { account } = useContext(AccountContext);
  console.log(account);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
