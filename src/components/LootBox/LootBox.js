import React from 'react';

import classes from './LootBox.module.css';

const LootBox = ( props ) => {
  return (
    
    <div
      // onClick={ props.clicked.bind( this, props.items ) }
      onClick={ props.clicked.bind( this, props.lootBoxID ) }
      className={ classes.LootBox }
    >
      <div className={ classes.crop }>
        <img className={ classes.CaseImg } src={ props.lootBoxImg } alt={ props.LootBoxName } />
      </div>
      <span className={ classes['CaseName'] }>{ props.lootBoxName }</span>
      {/* <Row>
          <Col><span className={ classes['CaseInfo'] }>Value Range:</span></Col>
          <Col><span className={ classes['CaseInfo'] }>{ props.valueRange }</span></Col>
        </Row> */}
      {/* </Container> */ }
    </div>
  );
}

export default LootBox;