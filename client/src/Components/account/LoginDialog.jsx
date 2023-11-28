import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constant/data";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/Api";

const dialogStyle = {
  marginTop: "12%",
  height: "96%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
    line-height: 28px;
    color: #4848484;
  }
`;
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  // --------------------- On Successfully Login -------------------------------------
  const onLoginSuccess = async (res) => {
    // console.log(res);
    const decoded = jwtDecode(res.credential);
    // console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);
  };

  // --------------------- On Login Error -------------------------------------

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1. Open Whatsapp on your phone</ListItem>
              <ListItem>2. Tap Menu Settings and Select Linked Device</ListItem>
              <ListItem>
                3. Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCode src={qrCodeImage} alt="qr code" />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateX(30%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
