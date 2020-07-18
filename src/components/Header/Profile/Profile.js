import React from 'react';

import classes from './Profile.module.css';

import CoinTracker from '../../CoinTracker/CoinTracker';
import MoneyTracker from '../../MoneyTracker/MoneyTracker';

function Profile() {
  return (
    <div className={ classes.ProfileContainer }>
      <div className={classes.Stat}>
        <CoinTracker  />
      </div>
      <div className={ classes.ProfilePic }></div>
      <div className={classes.Stat}>
        <MoneyTracker />
      </div>
    </div >
  );
};
export default Profile;