import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Box,
  IconButton,
  Menu,
  useTheme
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import SolanaWallet from "../../solana/SolanaWallet";
import { ColorModeContext, tokens } from "../../theme";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from "react";


require("../../Topbar.css");



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const ColorMode = useContext(ColorModeContext);

  const [anchorEl, setEnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEnchorEl(event.currentTarget)
    console.log(event.currentTarget);
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
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
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
        open={open}
        MenuListProps={{
          'aria-labelledby': 'notification-button'
        }}
        onClose={handelClose}
        

      >
        <div className = "notification_dd">
          <ul className="notification_ul">
            <li className="success">
              <div className="notify_icon">
                <div className="icon"> <AccountCircleOutlinedIcon /></div>
              </div>
              <div className="notify_data">
                <div className="title">
                  Dinh Nhan
                </div>
                <div className="sub_title">
                  Dat lich kham tri~
                </div>
              </div>
              <div className="notify_status">
                <p>Success</p>
              </div>
            </li>
            <li className="failed">
              <div className="notify_icon">
              <div className="icon"> <AccountCircleOutlinedIcon /></div>
              </div>
              <div className="notify_data">
                <div className="title">
                  Vinh Phuc
                </div>
                <div className="sub_title">
                  Dat lich kham da day
                </div>
              </div>
              <div className="notify_status">
               <p>Failed</p> 
              </div>
            </li>
            <li className="show_all">
              <p className="link">Show All Notifications</p>
            </li>
          </ul>
        </div>



      </Menu>
    </Box>
  );
};

export default Topbar;
