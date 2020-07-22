import React from "react";

import classes from "./Order.module.css";

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: lettuce</p>
    <p>
      Price: <strong>CAD 7.45</strong>
    </p>
  </div>
);

export default order;
