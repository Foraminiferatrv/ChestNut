import React from 'react';

import classes from './LootBoxItem.module.css';

const LootBoxItem = ( props ) => {
  return (
    <div className={ classes['ItemContainer'] }>
      <div className={classes.ImageContainer}>
        <img src={ props.adress } alt={ props.name } />
      </div>
      <div className={classes.ItemNameContainer}>
        <span className={classes.ItemName}>{ props.name }</span>
      </div>
    </div>
  );
}

export default LootBoxItem;