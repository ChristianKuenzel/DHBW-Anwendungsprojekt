import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';
registerLocale('de', de)

import "react-datepicker/dist/react-datepicker.css";

export default function datepicker() {
    const [startDate, setStartDate] = useState(new Date());
    return ( 
            <DatePicker 
                popperClassName="datepick"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd.MM.yyyy, HH:mm"
                filterDate={date => date.getDay() != 6 && date.getDay() != 0}
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                locale="de"
                placeholderText="Datum & Uhrzeit wählen"
                isClearable
                shouldCloseOnSelect={false}
            />
    )
}