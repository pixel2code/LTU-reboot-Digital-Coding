function betweenPrices( arr, lowPrice, highPrice ) {

  let arrItems = [];

  for( let index = 0; index < arr.length; index++ ) {

    if( arr[ index].price >= lowPrice && arr[ index ].price < highPrice ) {

      arrItems.push( arr[ index ].name );

    }

  }

  return arrItems;

}

console.log( betweenPrices( shoppingCart, 2, 5 ) );
console.log( betweenPrices( shoppingCart, 5, 10 ) );
console.log( betweenPrices( shoppingCart, 2, 4 ) );