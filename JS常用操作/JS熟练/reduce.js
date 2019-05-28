//初级用法

//计算数组元素之和
let arr = [1, 2, 3, 4];
let addItem = (sumRes, item) => {
    // console.log(sumRes, item)
    //reduce函数根据初始值0，不断的进行叠加，数组长度是4，但是reduce函数循环4次
    return sumRes + item;
};
let total = arr.reduce(addItem, 0);
// console.log(total);


let sum = arr.reduce(function (prev, cur, index) {
    // console.log(prev, cur, index);
    //index是从1开始的，第一次的prev的值是数组的第一个值。数组长度是4，但是reduce函数循环3次
    // return prev + cur;
})
// console.log(arr, sum);

// let mul = arr.reduce((x, y) => x * y)
// console.log(mul)

/**
 * 如果没有提供initialValue，
 * reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。
 * 如果提供initialValue，从索引0开始。
 */


let countNum = (sumRes, item) => {
    sumRes.total = sumRes.total + item
    return sumRes
}
let totalNum = arr.reduce(countNum, {
    total: 0
});

console.log(totalNum)

/**
 * reduce函数的返回结果类型和传入的初始值相同，上个实例中初始值为number类型，
 * 同理，初始值也可为object类型
 */


//高级用法

//计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let nameNum = names.reduce((pre, cur) => {
    if (cur in pre) {
        pre[cur]++
    } else {
        pre[cur] = 1
    }
    return pre
}, {})
// console.log(nameNum);

//数组去重
let numArr = [1, 2, 3, 4, 4, 1]
let newArr = numArr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        return pre.concat(cur)
    } else {
        return pre
    }
}, [])
console.log(newArr);

//将二维数组转化为一维
let towArr = [
    [0, 1],
    [2, 3],
    [4, 5]
]
let newArr2 = towArr.reduce((pre, cur) => {
    return pre.concat(cur)
}, [])
// console.log(newArr2);

//将多维数组转化为一维:flat方法的实现
let list = [
    [0, 1],
    [2, 3],
    [4, [5, 6, 7]]
]
const oneArr = function (list) {
    return list.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? oneArr(cur) : cur), [])
}
// console.log(oneArr(list));

//对对象属性的求和
var result = [
    {
        subject: 'math',
        score: 95,//95
        weight:0.4,
    },
    {
        subject: 'chinese',
        score: 100,//100
        weight:0.3,
    },
    {
        subject: 'english',
        score: 98,
        weight:0.3,
    }
];

var countNumber = result.reduce(function(prev, cur) {
    return  (cur.score*cur.weight) + prev;
}, 0);
console.log(countNumber) 