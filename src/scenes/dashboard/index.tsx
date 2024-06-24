import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import BrainIcon from "../../svg/BrainIcon";
import CovidIcon from "../../svg/Corona";
import LungsIcon from "../../svg/LungsIcon";
import { tokens } from "../../theme";

import FullCalendar from "@fullcalendar/react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";

import React, { FC } from "react";

interface ItemProps {
  title: string;
  to?: string;
  icon?: React.ReactNode;
  selected?: string;
  setSelected?: (value: string) => void;
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
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="2% 4%">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Tổng quan" subtitle="Bệnh Nhân" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Tải về báo cáo
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(14, 1fr)"
        gridAutoRows={{ xs: "50vh", sm: "20vh", md: "17vh", lg: `140px` }}
        gap="20px"
      >
        {/* PROGRESS */}
        <Box
          gridColumn="span 3"
          gridRow="span 4"
          bgcolor={colors.primary[400]}
          p="10%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="8%"
        >
          <Box>
            <ProgressCircle size={140} progress={0.09} subtitle="Tổn thương" />
          </Box>

          <Box>
            <ProgressCircle
              size={140}
              progress={0.51}
              subtitle="Điều trị lâm sàn"
            />
          </Box>

          <Box>
            <ProgressCircle
              size={140}
              progress={0.87}
              subtitle="Phục hồi dự tính"
            />
          </Box>
        </Box>

        {/* MODEL */}
        <Box
          gridColumn="span 11"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          display="flex"
        >
          <Box m={3}>
            <Typography variant="h5" fontWeight="bold" fontSize="1rem">
              Mô phỏng
            </Typography>
          </Box>

            {/* apply 3JS */}


          <Box height="inherited" ml="auto" sx={{ borderLeft: '2px solid rgba(0, 0, 0, 0.3)'}}>
            <ProSidebar width={120}>
              <Menu iconShape="square">
                <MenuItem>
                  <Box mt="30%">
                    <IconButton>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                </MenuItem>

                <Box height="100%" mt="12%">
                  <Item title="Lịch sử"></Item>
                  <Item title="Chuẩn đoán"></Item>
                  <Item title="Scan"></Item>
                </Box>
              </Menu>
            </ProSidebar>
          </Box>
        </Box>

        {/* DIAGNOSE */}
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="8% 10%"
        >
          <Typography variant="h5" fontWeight="bold" fontSize="1rem">
            Chuẩn đoán
          </Typography>

          <Box m="8% 4%" display="flex" flexDirection="column" gap=".4rem">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="6%"
            >
              <StatBox
                title="Covid 19"
                subtitle="1 Tháng trước"
                icon={<CovidIcon color={colors.greenAccent[600]} size="32px" />}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="6%"
            >
              <StatBox
                title="Viêm phổi"
                subtitle="1 Tháng trước"
                icon={<LungsIcon color={colors.greenAccent[600]} size="32px" />}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="6%"
            >
              <StatBox
                title="Tai biến"
                subtitle="1 Tháng trước"
                icon={<BrainIcon color={colors.greenAccent[600]} size="32px" />}
              />
            </Box>
          </Box>
        </Box>

        {/* PERFORMANCE */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
        >
          <Box m={2}>
            <Typography variant="h5" fontWeight="bold" fontSize="1rem">
              Tiến độ điều trị
            </Typography>
          </Box>
          <Box height="30vh">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* HISTORY */}
        <Box
          gridColumn="span 14"
          gridRow="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          p={3}
        >
          <Box flex="1 1 100%" display="flex" flexDirection="column">
            <FullCalendar
              height="calc(100% - 24px)" // Adjust height to fit within the parent Box
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next,today",
                center: "title",
                right: "timeGridWeek",
              }}
              initialView="timeGridWeek"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              initialEvents={[
                { id: "1234", title: "Khám nha chu", date: "2024-06-24" },
                { id: "3121", title: "Khám tổng quát", date: "2024-06-30" },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
