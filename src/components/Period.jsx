import React from "react";
import classes from "../assets/styles/Period.module.css";

const Period = ({ name, classRoom }) => {
  return (
    <div className={classes.periodBlock}>
      <span>{name}</span>
      <spam>{classRoom}</spam>
    </div>
  );
};

export default Period;
