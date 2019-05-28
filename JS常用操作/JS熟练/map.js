//简单数组求平方
const arr = [1, 3, 4, 5, 6, 7, 8, 10];

const cube = (num) => {
    return num * num;
}
const result = arr.map(cube);

const res = arr.map((num) => {
    return num * num;
})

//对象数组和构造器
const OjbArray = [
    {
        name: 'a',
        age: 18,
        isLikeEat: true,
        isLikeSleep: true
    }, 
    {
        name: 'b',
        age: 19,
        isLikeEat: true,
        isLikeSleep: true
    }, 
    {
        name: 'c',
        age: 22,
        isLikeEat: true,
        isLikeSleep: true
    }
];

const Person = (target) => {
    return {
        name: target.name || 'default',
        age: target.age || 18,
        _eat: function () {
            console.log(target.isLikeEat ? 'i like eat' : 'i dont like eat');
        },
        _sleep: function () {
            console.log(target.isLikeSleep ? 'i like sleep' : 'i dont like sleep')
        }
    }
}
console.log(OjbArray.map(Person));

// 当和parseInt()函数配合使用 将字符转成数字的时候，可直接
console.log(['1','2','3'].map(str => parseInt(str)))
console.log(['1', '2','3'].map(parseInt))
console.log(['1', '2'].map(str => Number(str)))
console.log(['1', '2'].map(Number))