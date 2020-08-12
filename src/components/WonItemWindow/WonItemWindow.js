import React from 'react';
import { motion } from 'framer-motion';

import classes from './WonItemWindow.module.css';

import Backdrop from '../UI/Backdrop/Backdrop';

const WonItemWindow = ( { wonItem } ) => {
  return (
    <motion.div className={ classes.WonItemWindow }>
      <Backdrop />
    </motion.div>
  );
};

export default WonItemWindow;