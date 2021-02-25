function discountFood( arr ) {

  let totalPrice = 0;

  for( let index = 0; index < arr.length; index++ ) {

    if ( arr[ index ].type === 'food' ) {

      let discount = ( arr[ index ].price * 20 ) / 100;

        totalPrice = totalPrice + ( arr[ index ].price - discount ) * arr[ index ].quantity;

    } else {

      totalPrice = totalPrice + ( arr[ index ].price * arr[ index ].quantity );

    }


  }

  return totalPrice.toFixed( 2 );

}

console.log( '£ ' + discountFood( shoppingCart ) );