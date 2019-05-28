var arr = [ 1, 2, 3, 4, 5, 6 ]; 
 
console.log( arr.some( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
})); 
 
console.log( arr.every( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
}));