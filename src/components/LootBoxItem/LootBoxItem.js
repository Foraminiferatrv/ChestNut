import React, { useState } from 'react';

import classes from './LootBoxItem.module.css';

import Spinner from '../UI/Spinner/Spinner';

const LootBoxItem = ( props ) => {
  const [isImgLoading, setImgLoading] = useState( true );

  const loadingToggle = () => {
    setImgLoading( false );
  }

  const spinnerClasses = [isImgLoading ? classes.Show : classes.Hide, classes.Spinner];

  let lootboxClasses = [classes.ItemContainer, props.externalClasses, classes[props.quality], classes[props.withSeparator]];

  return (
    <div className={ lootboxClasses.join( ' ' ) }>
      <div className={ classes.ImageContainer }>
        <Spinner externalClasses={ spinnerClasses.join( ' ' ) } />
        <img
          className={ isImgLoading ? classes.Hide : classes.Show }
          src={ props.img }
          alt={ props.name }
          onLoad={ loadingToggle } />
      </div>
      <div className={ classes.ItemNameContainer }>
        <span className={ classes.ItemName }>{ props.name }</span>
      </div>
    </div>
  );
}

export default LootBoxItem;