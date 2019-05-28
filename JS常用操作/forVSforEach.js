let arr = [1,2,3,4,5,6,7,8,9]
// for(let i=0; i<1000; i++){
//     arr.push({id:i,name:i})
// }
// for(let i=0; i<arr.length; i++){
//     console.log(i)
// }
// arr.forEach( item =>{
//     console.log(item)
// })
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2) {
//         continue;
//         // break;
//     }
//     console.log(arr[i], '  for')
// }
// for(let i in arr) {
//     if(i == 2) {
//         break;
//     }
//     console.log(arr[i], '   for in')
// }
// for(let i of arr) {
//     if(i == 2) {
//         break;
//     }
//     console.log(i, '   for of')
// }
// arr.forEach(val => {
//     if(val == 2) {
//         //此处的return false 仅仅相当于continue
//         return false;
//         //break或者continue均不能使用 会报错，对于map filter方法一样会报错
//         // break;
//         // continue
//     }
//     console.log(val, '   forEach')
// })

//数组的迭代方法：every、filter、forEach、map、some均不能使用break或者continue进行中断循环。
//以上几个函数的参数都是：一个回调函数 和 一个this的指向



// 数组添加操作
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2) {
//         //对于添加时，for可以遍历新数组
//         arr.push(5)
//     }
//     // 输出1 2 3 4 5
//     console.log(arr[i], '  for')
// }

// arr.forEach(val => {
//     if(val == 2) {
//         //对于添加时，forEach
//         arr.push(5)
//     }
//     // 输出1 2 3 4 5
//     console.log(val, '   forEach')
// })



//数组更新、删除操作
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2) {
//         //对于更新、删除时，for可以遍历新数组
//         //arr[1] = 100
//         arr.splice(i,1)
//     }
//     // 输出1 100 3 4
//     console.log(arr[i], '  for')
// }

// arr.forEach((val, i) => {
//     if(val == 2) {
//         //对于更新、删除时，forEach可以遍历新数组
//         // val = 100
//         arr.splice(i,1)
//     }
//     // 输出1 100 3 4
//     console.log(val, '   forEach')
// })



/**
 * array.map(callback,[ thisObject]);
 */
// var data = [1, 2, 3, 4];

// var arrayOfSquares = data.map(function (item) {
//   return item * item;
// });

// console.log(arrayOfSquares); // 1, 4, 9, 16

//callback需要有return值，如果没有，就像下面这样：

// var arrayOfSquares = data.map(function() {});

// arrayOfSquares.forEach(console.log);


//利用map方法方便获得对象数组中的特定属性值们
// var users = [
//     {name: "张含韵", "email": "zhang@email.com"},
//     {name: "江一燕",   "email": "jiang@email.com"},
//     {name: "李小璐",  "email": "li@email.com"}
// ];
  
// var emails = users.map(function (user) { 
//     return user.email; 
// });
// console.log(emails.join(","));

//Array.prototype扩展可以让IE6-IE8浏览器也支持map方法：

// if (typeof Array.prototype.map != "function") {
//     Array.prototype.map = function (fn, context) {
//         var arr = [];
//         if (typeof fn === "function") {
//             for (var k = 0, length = this.length; k < length; k++) {      
//                 arr.push(fn.call(context, this[k], k, this));
//             }
//         }
//         return arr;
//     };
// }

// 疑惑练习!!!!  解惑 ["1", "2", "3"].map(parseInt) 为何返回[1,NaN,NaN]

// var a=["1", "2", "3", "4","5",6,7,8,9,10,11,12,13,14,15];  
// console.log(a.map(parseInt));













//由于map的回调函数的参数index索引值作了parseInt的基数radix，导致出现超范围的radix赋值和不合法的进制解析，才会返回NaN
//怀疑索引值和基数radix对应关系的准确性，重新定义parseInt函数测试一下
function parseInt(str, radix) {   
    return str+'-'+radix;   
};

var a=["1", "2", "3", "4","5",6,7,8,9,10,11,12,13,14,15];  
console.log(a.map(parseInt));
//索引index的起始值从0开始，与radix的对应如前陈述一致，所以才会出现返回NaN的类型值