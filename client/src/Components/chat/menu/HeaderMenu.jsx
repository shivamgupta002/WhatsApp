import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { MoreVert as More } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MoreVert = styled(More)`
  font-size: 28px;
  cursor: pointer;
`;
const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: $4A4A4A;
`;
const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(null);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  return (
    <>
      <Box>
        <MoreVert onClick={handleClick} />
        <Menu
          anchorEl={open}
          keepMounted
          getContentAnchorE1={null}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuOption
            onClick={() => {
              handleClose();
              setOpenDrawer(true);
            }}
          >
            Profile
          </MenuOption>
        </Menu>
      </Box>
    </>
  );
};

export default HeaderMenu;
