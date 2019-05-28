//在一个Array中，删掉偶数，只保留奇数
let arr = [1,2,3,4,5,6]
let newArr = arr.filter((item,index,self)=>{
    // console.log(item,index,self)
    if(item % 2 !== 0){
        return item
    }
})
// console.log(newArr)


//把一个Array中的空字符串删掉
let arr1 = ['A', '', 'B','0',0, null, undefined, 'C', ' '];

let newArr1 = arr1.filter(function (item) {
    return item && item.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
});
console.log(newArr1)


//过滤数组中不符合项
var arr2 = [20, 30, 50, 96, 50]
var newArr2 = arr2.filter(item => item>40)  
console.log(newArr2)

//数组去重
var arr3 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 0, 8, 6, 3, 4, 56, 2];
var newArr3 = arr3.filter( (x, index, self) => self.indexOf(x) === index )  
console.log(newArr3); 

//创建一个数组，判断数组中是否存在某个值
var newArr4 = [
    { num: 1, val: 'rrr', flag: 'aa' },
    { num: 2, val: 'rrr3', flag: 'aa2'  }
]
console.log(newArr4.filter(item => item.num===2 ))