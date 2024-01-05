import React from "react";
import Period from "../components/Period";
import Timeline from "../components/Timeline";
import classes from "../assets/styles/Home.module.css";

const Home = () => {
  return (
    <div className={classes.homeAll}>
      <div className={classes.timelineContainer}>
        <Timeline />
      </div>
      <div className={classes.periodsContainer}>
        <div className={classes.periods}>
          <h1>Monday</h1>
          <Period name="." />
          <Period name="." />
          <Period name="IASE" classRoom={104} />
          <Period name="HPC" classRoom="G-04" />
          <Period name="." />
          <Period name="." />
          <Period name="." />
        </div>
        <div className={classes.periods}>
          <h1>Tuesday</h1>
          <Period name="." />
          <Period name="IASE" classRoom={106} />
          <Period name="WBD-2" classRoom="G-05" />
          <Period name="." />
          <Period name="IS" classRoom={109} />
          <Period name="GeoTA" classRoom="G-07" />
          <Period name="." />
        </div>
        <div className={classes.periods}>
          <h1>Wednesday</h1>
          <Period name="." />
          <Period name="." />
          <Period name="." />
          <Period name="IASE" classRoom={106} />
          <Period name="." />
          <Period name="WBD-2" classRoom="G-09" />
          <Period name="IS" classRoom={109} />
        </div>
        <div className={classes.periods}>
          <h1>Thursday</h1>
          <Period name="GeoTA" classRoom="G-06" />
          <Period name="IS" classRoom={106} />
          <Period name="HPC" classRoom="G - 07" />
          <Period name="." />
          <Period name="WBD-2" classRoom="G-05" />
          <Period name="." />
          <Period name="." />
        </div>
        <div className={classes.periods}>
          <h1>Friday</h1>
          <Period name="." />
          <Period name="GeoTA" classRoom="G-04" />
          <Period name="." />
          <Period name="HPC" classRoom="G-08" />
          <Period name="WBD-2 Lab" classRoom="G-04" />
          <Period name="WBD-2 Lab" classRoom="G-04" />
          <Period name="WBD-2 Lab" classRoom="G-04" />
        </div>
        <div className={classes.periods}>
          <h1>Saturday</h1>
          <Period name="SSHAM" />
          <Period name="SSHAM" />
          <Period name="SSHAM" />
          <Period name="SSHAM" />
          <Period name="SSHAM" />
          <Period name="SSHAM" />
          <Period name="SSHAM" />
        </div>
      </div>
    </div>
  );
};

export default Home;
