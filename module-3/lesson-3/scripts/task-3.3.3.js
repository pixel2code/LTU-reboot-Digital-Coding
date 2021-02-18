function calculator( number1, number2, operator ) {

  switch( operator ) {
    case '+' :
      console.log( `${number1} + ${number2} = ${number1 + number2}` );
      break;
    case '-' :
      console.log( `${number1} - ${number2} = ${number1 - number2}` );
      break;
    case '*' :
      console.log( `${number1} * ${number2} = ${number1 * number2}` );
      break;
    case '/' :
      console.log( `${number1} / ${number2} = ${number1 / number2}` );
      break;
    default:
      console.log( `${operator} is not valid operator` );
      break;
  }

}

calculator( 5, 5, '+' );
calculator( 10, 5, '-' );
calculator( 5, 5, '*' );
calculator( 5, 5, '/' );