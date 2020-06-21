import React from "react";

import classes from './CoinsTracker.module.css';

function CoinTracker() {
  return (
    <span className={classes.CoinTracker}>Coins: <span className={classes.CoinsAmount}> 223</span></span>
  );
}

export default CoinTracker;