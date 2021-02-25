function shoppingCartTotal( arr ) {

let totalPrice = 0;

    for ( let index = 0; index < arr.length; index++ ) {

      totalPrice = totalPrice + ( arr[ index ].price * arr[ index ].quantity );

    }

    return totalPrice.toFixed( 2 );

}



console.log ( '£ ' + shoppingCartTotal( shoppingCart ) ) ; 