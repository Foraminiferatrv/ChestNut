import React, { useState } from 'react';

import classes from './LootBox.module.css';

import Spinner from '../UI/Spinner/Spinner';

const LootBox = ( props ) => {
  const [isImgLoading, setImgLoading] = useState( true );

  const spinnerClasses = [isImgLoading ? classes.Show : classes.Hide, classes.Spinner];
  const imgClasses = [classes.CaseImg, isImgLoading ? classes.Hide : classes.Show];

  const loadingToggle = () => {
    setImgLoading( false );
  }


  return (
    <div
      className={ classes.LootBox }
      onClick={ props.clicked.bind( this, props.lootBoxID ) }
    >
      <Spinner externalClasses={ spinnerClasses.join( ' ' ) } />
      <div className={ classes.crop }>
        <img
          className={ imgClasses.join( ' ' ) }
          src={ props.lootBoxImg }
          alt={ props.LootBoxName }
          onLoad={ loadingToggle }
        />
      </div>
      <span className={ classes.CaseName }>{ props.lootBoxName }</span>
      {/* <span className={ classes['CaseInfo'] }>Value Range:</span>
          <span className={ classes['CaseInfo'] }>{ props.valueRange }</span>
       */}
    </div>
  );
}

export default LootBox;