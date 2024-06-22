import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MessageIcon from '@mui/icons-material/Message';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { FC, ReactNode, useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (value: string) => void;
}

const Item: FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      display="flex"
      sx={{
        width: "100vw",
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  MEDITA
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="./images/medita-icon.png"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Dr. Thanh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Bác Sĩ Đa Khoa
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} height="100%" >
            <Item
              title="Bảng điều khiển"
              to="/dashboard"
              icon={<SpaceDashboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Bệnh nhân"
              to="/patient"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Lịch khám"
              to="/calendar"
              icon={<EditCalendarIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Thêm"
              to="/request"
              icon={<AddCircleIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Tin nhắn"
              to="/message"
              icon={<MessageIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>

      {children}
    </Box>
  );
};

export default Sidebar;
