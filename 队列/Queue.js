/**
 * 队列特性：先进先出；栈特性：后进先出
 */

function Queue(){
    var items = []; //存储数据 回忆不用this
    //向队列尾部添加一个元素
    this.enqueue = (item) => items.push(item)
    //移除队列头部元素
    this.dequeue = () => {return items.shift()}
    //返回队列头部元素
    this.head= () => {return items[0]}
    //返回队列尾部元素
    this.tail= () =>  {return items[items.length-1]}
    //返回队列大小
    this.size= () => {return items.length}
    //清除队列
    this.clear= () => items = []
    //判断队列是否为空
    this.isEmpty= () => {return items.length == 0}
}

//两队列实现一个栈
function QueueStack() {
    let q1=new Queue(),
        q2=new Queue();
    let dataQueue = null,   //放数据队列
        emptyQueue = null;  //空队列，备份数据

    //确认那个队列放数据，那个队列备份空队列
    let initQueue = ()=>{
        //都为空的情况，默认返回q1
        if(q1.isEmpty() && q2.isEmpty()){
            dataQueue = q1;
            emptyQueue =q2;
        }else if(q1.isEmpty()){
            dataQueue = q2;
            emptyQueue = q1;
        }else{
            dataQueue = q1;
            emptyQueue = q2;
        }
    }
    //push
    this.push=(item) => {
        initQueue();
        dataQueue.enqueue(item)
    }
    //top
    this.top=() => {
        initQueue();
        return dataQueue.tail()
    }


    /**
     * pop 弹出栈顶元素，这个栈顶=queue的队尾元素
     * 队尾元素不能删除，我们可以把dataQueue里
     * 的元素（除了队尾元素）都移除放入emptyQueue中
     */
    this.pop = () => {
        initQueue();
        while(dataQueue.size()>1){
            emptyQueue.enqueue(dataQueue.dequeue())
        }
        return dataQueue.dequeue();
    }
}

var q_stack = new QueueStack()
q_stack.push(0)
q_stack.push(1)
q_stack.push(2)
q_stack.push(3)
console.log(q_stack.top())
console.log(q_stack.pop())

//打印杨辉三角