let date = new Date();

let day = date.getDay();


function dayOfTheWeek( day ) {

  switch( day ) {

    case 1:
      console.log( `It is Monday`);
      break;
    case 2:
      console.log( `It is Tuesday`);
      break;
    case 4:
      console.log( `It is Thursday`);
      break;
    default:
      console.log( 'error');
      break;
  }

}

dayOfTheWeek(day);

console.log( date )