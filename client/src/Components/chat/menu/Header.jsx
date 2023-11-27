import React, { useContext } from "react";
import { Box, styled } from "@mui/material";
import { Chat , MoreVert as More } from "@mui/icons-material";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 54px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-item: center;
`;
const MessageIcon = styled(Chat)`
font-size:40px;
`
const MoreVert = styled(More)`
font-size:40px;
`
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    font-size: 40px;
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & :first-child {
    margin-right: 8px;
  }
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});
const Header = () => {
  const { account } = useContext(AccountContext);
  console.log(account);

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" />
        <Wrapper>
          <MessageIcon />
          <MoreVert />
        </Wrapper>
      </Component>
    </>
  );
};

export default Header;
