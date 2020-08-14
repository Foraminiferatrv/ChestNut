import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

import classes from './WonItemWindow.module.css';

import Backdrop from '../UI/Backdrop/Backdrop';
import LootBoxItem from '../LootBoxItem/LootBoxItem';
import GeneralButton from '../UI/GeneralButton/GeneralButton';

const WonItemWindow = ( { wonItemData } ) => {
  let history = useHistory();

  const closeWonItemWindow = () => {
    history.goBack();
  }

  return (
    <motion.div className={ classes.WonItemWindow }>
      <LootBoxItem
        externalClasses={ classes.LootBoxChosenItem }
        name={ wonItemData.itemData.name }
        img={ wonItemData.itemData.img }
        id={ wonItemData.id }
        quality={ wonItemData.itemData.quality } />
      <GeneralButton
        name={ 'Take!' }
        externalClasses={ classes.WonItemButton }
        clicked={ closeWonItemWindow }
      />
      <Backdrop
        show
        clicked={ closeWonItemWindow } />
    </motion.div>
  );
};

export default WonItemWindow;