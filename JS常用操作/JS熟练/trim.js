// trim function 实现
let creatTrim = (str) => {
    return str.replace(/^\s+|\s+$/gm,'');//两边
    // return this.replace(/(^\s*)/g,""); //左边
    // return this.replace(/(\s*$)/g,""); //右边
}
//原型创建字符串的trim
String.prototype.cTrim=function(){
　　return this.replace(/^\s+|\s+$/gm,'');
}
console.log(' 123 '.cTrim())