import React from 'react';

import classes from './LootBoxItem.module.css';

function LootBoxItem( props ) {
  return (
    <div className={ classes['ItemContainer'] }>
      <div>
        <img src={ props.adress } alt={ props.name } />
      </div>
      <div>
        <span>{ props.name}</span>
      </div>
    </div>
  );
}

export default LootBoxItem;