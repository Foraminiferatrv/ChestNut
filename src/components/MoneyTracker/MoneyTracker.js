import React from "react";

import classes from './MoneyTracker.module.css';

function MoneyTracker() {
  return (
    <span className={classes.CoinTracker}>$ <span className={classes.CoinsAmount}> 223</span></span>
  );
}

export default MoneyTracker;