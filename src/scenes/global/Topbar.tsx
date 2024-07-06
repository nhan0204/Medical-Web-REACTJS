import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import SolanaWallet from "../../solana/SolanaWallet";
import { ColorModeContext, tokens } from "../../theme";
import { 
  Box, 
  IconButton, 
  useTheme,
  Menu
}
from "@mui/material";
import { MenuItem } from "react-pro-sidebar";

import { useState } from "react";

require("../../App.css");



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ColorMode = useContext(ColorModeContext);
  
  const [anchorEl, setEnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEnchorEl(event.currentTarget)
  } 
  const handelClose = () => {
    setEnchorEl(null)
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Search Bar */}
      <Box
        display="flex"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
          margin: "0 2%"
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box id="topbar-buttons" display="flex">
        <SolanaWallet></SolanaWallet>
        <IconButton onClick={ColorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton id="notification-button" 
        onClick={handleClick} 
        aria-controls={open ? 'notification-menu' : undefined} 
        aria-haspopup = 'true'
        aria-expanded ={open ? 'true' : undefined}
        >
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

      <Menu id="notification-menu" 
      className="notiMenu"
      anchorEl={anchorEl} 
      open = {open} 
      MenuListProps={{
        'aria-labelledby' : 'notification-button'
      }}
      onClose={handelClose}
      >
          {/* <MenuItem onClick={handelClose}> Blog </MenuItem> */}
          {/* <MenuItem onClick={handelClose}> Poscast </MenuItem> */}
          <div className="notification_dd">


          </div>

      </Menu>
    </Box>
  );
};

export default Topbar;
