import React from "react";
import classes from "../assets/styles/Timeline.module.css";

const Timeline = () => {
  return (
    <div>
      <h1>Timeline</h1>
      <div className={classes.fixedPeriods}>
        <p>08:45 AM - 9:45 AM</p>
        <p>09:45 AM - 10:45 AM</p>
        <p>11:00 AM - 12:00 PM</p>
        <p>12:00 PM - 01:00 PM</p>
        <p>02:15 PM - 03:15PM</p>
        <p>03:15 PM - 04:15PM</p>
        <p>04:30 PM - 05:30 PM</p>
      </div>
    </div>
  );
};

export default Timeline;
