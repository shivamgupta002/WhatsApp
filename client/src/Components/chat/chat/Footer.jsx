import React from "react";
import { Box, styled, InputBase } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
const Container = styled(Box)`
  height: 9vh;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;
const SearchBox = styled(Box)`
  background: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;
const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;

const Footer = ({ sendText, setValue, value }) => {
  const onFileChange = (e) => {
    // setFile(e.target.files[0]);
    // setValue(e.target.files[0].name);
    alert("Sending media functionality will be coming soon");
  };
  return (
    <>
      <Container>
        <EmojiEmotionsOutlined />
        <label htmlFor="fileInput">
          <ClipIcon />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => onFileChange(e)}
        />
        <SearchBox>
          <InputField
            placeholder="Type a Message"
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => sendText(e)}
            value={value}
          />
        </SearchBox>
        <Mic />
      </Container>
    </>
  );
};

export default Footer;
