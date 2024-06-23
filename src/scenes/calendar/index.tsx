import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import { EventApi, formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";

import RemoveIcon from '@mui/icons-material/Remove';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Đặt tên lịch hẹn của bạn");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (window.confirm(`Bạn có muốn xóa ${selected.date.event}`)) {
      selected.event.remove();
    }
  };

  const eventRenderer = ({ event }: { event: any }) => {
    return (
      <Box
        // sx={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-between",
        //   height: "100%"
        // }}  
      >
        <Box>
          <Typography variant="h6">{event.title}</Typography>
          <Typography>
            {formatDate(event.start, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Typography>
        </Box>
        <IconButton
          onClick={
            () => handleEventRemove(event) // Function to handle event removal
          }
          aria-label="delete"
        >
          <RemoveIcon />
        </IconButton>
      </Box>
    );
  };

  const handleEventRemove = (event: EventApi) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${event.title}'?`
      )
    ) {
      event.remove();
    }
  };

  return (
    <Box margin="1% 2%">
      <Header title="Đặt lịch" subtitle="Thăm khám" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          sx={{
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">Lịch hẹn</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: "bold" }}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="2%" justifyContent="space-between">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev, next, today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay, listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            eventContent={eventRenderer}
            initialEvents={[
              { id: "1234", title: "Khám nha chu", date: "2024-06-24" },
              { id: "3121", title: "Khám tổng quát", date: "2024-06-30" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
