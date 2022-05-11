import React from "react";

export default function Today(props) {
  const today = props.today;
  return (
    <div className="todayCont">
      <span className="todayHead">Today</span>

      <span className="todayHead"> {today}</span>
      <button className="addBtn">+</button>
    </div>
  );
}
