import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import LootBoxItem from '../LootBoxItem/LootBoxItem';

import classes from './RollRibbon.module.css';

import { getRolledItem } from '../containers/RollWindow/randomizer';


const RollRibbon = ( { randomItemsData, chosenItem, animationEnd, animate } ) => {

  const [rollRibbonState, setRollRibbonState] = useState( {
    ribbonBegining: null,
    ribbonEnd: null
  } );

  const ribbonAnimation = useAnimation();

  const createRandomItem = ( itemData ) => {
    return itemData.map( ( { id, itemData }, index ) => <LootBoxItem
      withSeparator='WithSeparator'
      key={ `${id}${index}` }
      id={ id }
      { ...itemData } />
    )
  }

  const createRollRibbon = ( allItemsData, numberOfItems ) => {
    if ( allItemsData !== null && allItemsData !== undefined ) {
      let itemsDataForContent = [];
      for ( let i = 0; i <= numberOfItems; i++ ) {
        itemsDataForContent = [...itemsDataForContent, getRolledItem( allItemsData )];
      }
      return createRandomItem( itemsDataForContent );
    }
  }

  useEffect( () => {
    if ( animate ) {
      ribbonAnimation.start(
        {
          x: Math.floor( Math.random() * ( ( -8173 ) - ( -8020 ) ) ) + ( -8020 ),
          transition: {
            duration: 6.5,
            ease:'easeOut'
          }
        }
      );
    }
  }, [animate] );

  useEffect( () => {
    setRollRibbonState( {
      ...rollRibbonState,
      ribbonBegining: createRollRibbon( randomItemsData, 50 ),
      ribbonEnd: createRollRibbon( randomItemsData, 3 )
    } );
  }, [] );


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
          { rollRibbonState.ribbonBegining }
          <LootBoxItem
            withSeparator='WithSeparator'
            id={ chosenItem.id }
            { ...chosenItem.itemData } />
          { rollRibbonState.ribbonEnd }
        </motion.div>
      </div>
    </div>
  )
}

export default RollRibbon;