import React from 'react';

import classes from './Logo.module.css';

function Logo() {
  return (
    <div className={ classes.Logo }>
      <a href="#" alt="Logo" className={ classes.LogoImg }></a>
    </div>
  );
}

export default Logo;