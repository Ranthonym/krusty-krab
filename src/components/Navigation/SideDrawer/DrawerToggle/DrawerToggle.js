import React from "react";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div onClick={props.clicked}>
    <div className={classes.ToggleMenu}></div>
    <div className={classes.ToggleMenu}></div>
    <div className={classes.ToggleMenu}></div>
  </div>
);

export default drawerToggle;
