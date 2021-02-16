var temperature = Math.floor( Math.random() * 60 + 1 );
var season = 'summer';

if ( temperature < 0 ) {

  console.log( temperature , 'Stay inside');

} else if ( temperature < 30 ) {

  console.log( temperature , 'Wear a coat and a hat');

} else if ( temperature < 50 ) {

  console.log( temperature , 'Wear a coat');

} else if (temperature > 50 && season === 'summer' ) {

  console.log( temperature , 'Its hot outside, get yourself a beer');

} else {

  console.log( temperature , 'just pants and vest is fine');

}