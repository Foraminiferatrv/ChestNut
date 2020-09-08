import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './LootBoxItemsWindow.module.css';

import LootBoxItem from '../../LootBoxItem/LootBoxItem';
import GeneralButton from '../../UI/GeneralButton/GeneralButton';
import BackButton from '../../UI/BackButton/BackButton';
import {sorter} from './sorter';

const LootBoxItemsWindow = ( props ) => {

  return (
    <div className={ classes.LootBoxItemsWindow }>
      <BackButton externalClasses={ classes.BackButton } />
      <div className={ classes.IttemsBlock }>
        <div className={ classes.ItemsContainer }>
          { props.allItemsData.sort(sorter).map( item => {
            return (
              <LootBoxItem
                key={ item.id }
                name={ item.name }
                img={ item.img }
                quality={ item.quality }
              /> );
          } ) }
        </div>
        <div className={ classes.ButtonBlock } >
          <GeneralButton color='yellow' name='Buy The Case' />
          <Link to={
            { pathname: `/csgo/chests/${props.match.params.caseID}/opening` }
          }
          >
            <GeneralButton name='Open The Case' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter( LootBoxItemsWindow );