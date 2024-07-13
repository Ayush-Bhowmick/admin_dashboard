import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

const events = [
  { title: 'Meeting', start: '2024-06-12T10:30:00', end: '2024-06-12T12:30:00' },
  { title: 'Lunch', start: '2024-06-13T12:00:00' },
  { title: 'Conference', start: '2024-06-18', end: '2024-06-20' },
];

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;
