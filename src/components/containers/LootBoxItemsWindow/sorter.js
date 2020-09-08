function sorter( itemA, itemB ) {

  const qualities = [ 'MilSpec', 'Restricted', 'Classified', 'Covert', 'ExceedinglyRare' ];

  if ( qualities.indexOf( itemA.quality ) < qualities.indexOf( itemB.quality ) ) {

    return -1;
  }
  if ( qualities.indexOf( itemA.quality ) > qualities.indexOf( itemB.quality ) ) {
    return 1;
  }

  return 0;
}

export {
  sorter
};