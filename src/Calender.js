import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setDate } from "./store/rootSlice";

function Calender() {
  const [value, setvalue] = useState(new Date());
  const dispatch = useDispatch();

  function onChange1(v) {
    setvalue(v);
    dispatch(setDate(v));
  }
  return (
    <div>
      <Calendar onChange={onChange1} value={value} />
    </div>
  );
}

export default Calender;
