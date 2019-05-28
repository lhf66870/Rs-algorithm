function Stack(){
    var items = []  //使用数组存储数据
    this.push = function( item ){
        items.push(item)
    }
    this.pop = function(){
        return items.pop() // 需要知道 pop 的是谁   
    }
    this.top = function(){
        return items[items.length-1]
    }
    this.isEmpty = function(){
        return items.length == 0  // == ? ===
    }
    this.size = function(){
        return items.length 
    }
    this.clear = function(){
        items = []
    }
}

//两个栈实现队列
// function stackQueue(){
//     let s1 = new Stack(),
//         s2 = new Stack();
//     let dataStack = null,   //放数据栈
//         emptyStack = null;  //空栈，备份数据
//     //确认那个栈放数据，那个栈备份
//     let initStack = ()=>{
//         //都为空的情况，默认返回s1
//         if(s1.isEmpty() && s2.isEmpty()){
//             dataStack = s1;
//             emptyStack =s2;
//         }else if(s1.isEmpty()){
//             dataStack = s2;
//             emptyStack = s1;
//         }else{
//             dataStack = s1;
//             emptyStack = s2;
//         }
//     }
//     this.enqueue = (item) => {
//         initStack()
//         dataStack.push(item)//[0,1,2,3]
//     }
//     this.head = () => {
//         initStack();
//         while(dataStack.size()>1){
//             emptyStack.push(dataStack.pop())
//         }
//         return dataStack.top();
//     }
//     this.tail = () => {
//         initStack();
//         return dataStack.pop();
//     }
// }
// var q_stack = new stackQueue()
// q_stack.enqueue(0)
// q_stack.enqueue(1)
// q_stack.enqueue(2)
// q_stack.enqueue(3)
// console.log(q_stack.head())
// console.log(q_stack.tail())


function StackQueue(){
    let stack1 = new Stack(),
        stack2 = new Stack();
    //总是把数据放入stack1中
    this.enqueue = (item) => {
        stack1.push(item)
    }
    //获得队列的头
    this.head = () => {
        //如果两个栈都是空的
        if(stack1.isEmpty() && stack2.isEmpty()){
            return null
        }
        //如果stack2为空，stack1一定不为空，stack1元素导入stack2
        if(stack2.isEmpty()){
            while(!stack1.isEmpty()){
                stack2.push(stack1.pop())
            }
        }
        return stack2.top()
    }
    //出队
    this.dequeue = () => {
        //如果两个栈都是空的
        if(stack1.isEmpty() && stack2.isEmpty()){
            return null
        }
        //如果stack2为空，stack1一定不为空，stack1元素导入stack2
        if(stack2.isEmpty()){
            while(!stack1.isEmpty()){
                stack2.push(stack1.pop())
            }
        }
        return stack2.pop()
    }
}