function getRandomQuality() {
  const randomNum = Math.random() * 100;

  if ( randomNum <= 0.26 ) {
    return 'ExceedinglyRare';
  }
  if ( randomNum <= 0.64 ) {
    return 'Covert';
  }
  if ( randomNum <= 3.2 ) {
    return 'Classified';
  }
  if ( randomNum <= 15.98 ) {
    return 'Restricted';
  }
  return 'MilSpec';
}

function createRolledItemData( allItems, quality ) {
  let itemsArray = [];
  for ( const key in allItems ) {
    if ( allItems[ key ].quality === quality ) {
      itemsArray = [ ...itemsArray, allItems[ key ] ];
    }
  }
  return itemsArray[ Math.floor( Math.random() * itemsArray.length ) ];
}

function getRolledItem( itemsDataList ) {
  return createRolledItemData( itemsDataList, getRandomQuality() );
}


export {
  getRolledItem
};