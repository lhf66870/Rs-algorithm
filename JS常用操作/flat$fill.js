// let arr1 = [1,2,['a','b',['中','文',[1,2,3,[11,21,31]]]],3];

// console.log( arr1.flat( Infinity ) );

let arr2 = [1,2,{x:1,y:2},3];

function flat( items ) {
    return items.reduce( (prev, current) => {
        return prev.concat( 
            current,
            Array.isArray(current.children) ? flat(current.children) : []
         );
    }, [] );
}
console.log( flat( arr2 ) );


// Array.prototype.fil()方法：用给定值填充数组

/**
 * arr.fill(value[, start[, end]])
 * Value to fill an array.
 * Start index, defaults to 0.
 * End index, defaults to this.length.
 * return The modified array.
 */



//初始化
// let array = new Array(5).fill(1);
// console.log(array);


//指定位置
// let array = [1,1,1,1,1,1];
// array.fill(0,1,2); //从下标1到下标3之前将值改变为0
// console.log(array)


//Array.prototype.reduce()   Array.prototype.flat()      Array.prototype.sort()



