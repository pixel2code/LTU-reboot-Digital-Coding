function discountAmount( arr, discountAmount, type ) {

  let totalPrice = 0;

  for ( let index = 0; index < arr.length; index++ ) {

    if( arr[ index ].type ===  type ) {

      let discount = ( arr[ index ].price * discountAmount ) / 100;

          totalPrice = totalPrice + ( arr[ index ].price - discount ) * arr[ index ].quantity;

    } else if ( arr[ index ].type ===  'any' ) {
      
      let discount = ( arr[ index ].price * discountAmount ) / 100;

          totalPrice = totalPrice + ( arr[ index ].price - discount ) * arr[ index ].quantity;
  
    } else {

      totalPrice = totalPrice + ( arr[ index ].price * arr[ index ].quantity );

    } // end of if statement

  } // end of for loop

  return totalPrice.toFixed( 2 );
  
}

console.log( 'food 15% : ' + discountAmount( shoppingCart, 15, 'food' ) );
console.log( 'alcohol 50% : ' + discountAmount( shoppingCart, 50, 'alcohol' ) );
console.log( 'home 10% : ' + discountAmount( shoppingCart, 10, 'home' ) );