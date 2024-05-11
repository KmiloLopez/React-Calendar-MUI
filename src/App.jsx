import React, {useState} from 'react';
import { DateCalendar, DatePicker } from '@mui/x-date-pickers';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import ShortTextIcon from '@mui/icons-material/ShortText';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

import dayjs from 'dayjs' // ES 2015
import CalendarMUI from './components/calendarMU/CalendarMUI';
dayjs().format()


const App = () => {

  const day= "day"
	return (
		<div className="contenedor">
			<div className="grupo">
				<CalendarMUI/>
      		
			</div>
		</div>
	);
}
 
export default App;