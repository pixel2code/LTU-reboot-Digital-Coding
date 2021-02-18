function drinkOrder( size, drinkName ) {

  let drink = drinkName.toLowerCase();

  let messageTemplate = 'You have ordered a';

  switch( drink ) {
    case 'cola' :
      console.log( `${messageTemplate} ${size} ${drink}`);
      break;
    case 'lemonade' :
      console.log( `${messageTemplate} ${size} ${drink}` );
      break;
    case 'orangeade' :
      console.log( `${messageTemplate} ${size} ${drink}` );
      break;
    default:
      console.log('error');
      break;
  }

}


drinkOrder( 'x-large', 'cola');