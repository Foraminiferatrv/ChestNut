import React from 'react';

import classes from './LootBoxItem.module.css';

const LootBoxItem = ( props ) => {
  let lootboxClasses = [classes.ItemContainer, classes[props.quality]];
  return (
    <div className={ lootboxClasses.join(' ') }>
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