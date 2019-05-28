function Stack(){
    
    //使用this, stack 这个对象可以直接访问自己的属性 然后 push,this暴露出了 items
    //你设计的类，属性暴露，任何人拿到这个类都可以创建对象改变他的属性，从而混乱，不安全
    //items 是私有变量  只能用我们暴露出去的方法
    var items = []  //使用数组存储数据
    /**
     * push方法：从栈点添加元素，压栈
     */
    this.push = function( item ){
        items.push(item)
    }

    /**
     * pop方法：弹出栈点元素
     */
    this.pop = function( item ){
        return items.pop() // 需要知道 pop 的是谁   
    }

    /**
     * ******************* 数组为空  {*健壮性判断*} *******************
     */

    /**
     * top方法：返回栈顶元素
     */
    this.top = function( item ){
        return items[items.length-1]
    }

    /**
     * isEmpty方法：判断栈是否为空
     */
    this.isEmpty = function( item ){
        return items.length == 0  // == ? ===
    }

    /**
     * size方法：返回栈的大小
     */
    this.size = function( item ){
        return items.length 
    }

    /**
     * clear方法：清空栈
     */
    this.clear = function( item ){
        items = []
        //items.length = 0  赋值能成功 但是数组没有清空 不规范
    }

    /**
     * 以字符串显示栈中所有内容
     */
    this.print = function() {
        console.log(items.toString());
    };
    // return true  ？？？
    //  var items = []  为什么不用 this.items = [] ???
}




//判断字符串是否合法
function is_leagl_brackets( string ) {
    var stack = new Stack()
    for(var i = 0; i<string.length; i++){
        var item = string[i]
        //遇到 (  入栈 
        if(item == '('){
            stack.push(item)
        }else if(item == ')'){
            //遇到 )  判断栈为空
            if (stack.isEmpty()) return false
            stack.pop() //弹出左括号
        }
    }
    //栈为空则合法
    return stack.isEmpty()
}

// console.log(is_leagl_brackets("sdf(ds(ew(we)rw)erp)qwewe"))
// console.log(is_leagl_brackets("(sd(qwqw)sd(sd))"))
// console.log(is_leagl_brackets("()()sd()(sd()wer)("))

//['4','13','5','/','+'] 等价于(4+(13/5))= 6

// 分析
/**
 * 4    入栈
 * 13   入栈
 * 5    入栈
 * 遇到了 / 除号   连续弹出两个栈顶元素   a b   b/a=c  c入栈
 * 遇到了 + 加号   连续弹出两个栈顶元素   e f  e?f?  e+f = 6  6入栈
 */



 //计算后缀表达式
let arr = ['4','13','5','/','+']

function calc_exp( exp ){
    let stack = new Stack();
    exp.forEach((item,index) => {
        if(['+','-','*','/'].indexOf(item)>=0){
            let value_1 = stack.pop()
            let value_2 = stack.pop()
            //第一次弹出的数在运算符右边，第二次在左边
            let expStr =  value_2 + item + value_1;//！！！
            //计数并取整
            let resNum = parseInt(eval(expStr));
            //结果压入栈中
            stack.push(resNum.toString())
        }else{
            stack.push(item)
        }
    });
    return stack.pop()
}
// console.log(calc_exp(arr))


//eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
//["10","6","9","3","+","-11","*","/","*","17","+","5","+"] 等价于 
//((10*(6/((9+3)*-11)))+17)+5