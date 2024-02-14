/* eslint-disable react/prop-types */

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


 const DateRangePicker = ({startDate, endDate, setDateRange}) => {
    return (
      <ReactDatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    );
}

export default DateRangePicker
