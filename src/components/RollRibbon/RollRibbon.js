import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LootBoxItem from '../LootBoxItem/LootBoxItem';

import classes from './RollRibbon.module.css';

import { getRolledItem } from '../containers/RollWindow/randomizer';


const RollRibbon = ( { randomItemsData, chosenItem, animationEnd, animate } ) => {

  const [rollRibbonState, setRollRibbonState] = useState( {
    ribbonBegining: null,
    ribbonEnd: null
  } );

  let ribbonBegining = null;
  let ribbonEnd = null;

  const ribbonAnimation = useAnimation();

  const createRandomItems = ( itemData ) => {
    if ( itemData !== null && itemData !== undefined ) {
      return itemData.map( ( { id, name, quality, img }, index ) =>
        <LootBoxItem
          withSeparator='WithSeparator'
          key={ `${id}${index}` }
          id={ id }
          name={ name }
          img={ img }
          quality={ quality } />
      )
    }
    return null;
  }

  const createRollRibbonData = ( allItemsData, numberOfItems ) => {
    if ( allItemsData !== null && allItemsData !== undefined ) {
      let itemsDataForContent = [];
      for ( let i = 0; i <= numberOfItems; i++ ) {
        itemsDataForContent = [...itemsDataForContent, getRolledItem( allItemsData )];
      }
      return itemsDataForContent;
    }
  };

  useEffect( () => {
    if ( animate ) {
      ribbonAnimation.start(
        {
          x: Math.floor( Math.random() * ( ( -8173 ) - ( -8020 ) ) ) + ( -8020 ),
          transition: {
            duration: 6.5,
            ease: 'easeOut'
          }
        }
      );
    }
  }, [animate] );

  useEffect( () => (
    setRollRibbonState( {
      ...rollRibbonState,
      ribbonBegining: createRollRibbonData( randomItemsData, 50 ),
      ribbonEnd: createRollRibbonData( randomItemsData, 3 )
    } ) )
    , [] );


  return (
    <div className={ classes.RollLine }>
      <div className={ classes.Cursor }></div>
      <div className={ classes.ForCursorContainer }>
        <motion.div
          animate={ ribbonAnimation }
          variants={ ribbonAnimation }
          className={ classes.InnerRibbon }
          onAnimationComplete={ animationEnd }
        >
          { createRandomItems( rollRibbonState.ribbonBegining ) }
          <LootBoxItem
            withSeparator='WithSeparator'
            id={ chosenItem.id }
            { ...chosenItem } />
          { createRandomItems( rollRibbonState.ribbonEnd ) }
        </motion.div>
      </div>
    </div>
  )
}

export default RollRibbon;