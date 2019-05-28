//节点类
function Node(data){
    this.data = data;
    this.next = null;
}

let node1 = new Node(1) 
let node2 = new Node(5)
let node3 = new Node(7)
let node4 = new Node(9)
// console.log(node1.data)
// console.log(node1.next)
// console.log(node1.next.data)

// node1.next = node2;
// node1.next.next = node3;
// console.log(node1)
// console.log(node1.next.data)
// console.log(node1.next.next.data)



function LinkList(){
    var Node = function(data){
        this.data = data;
        this.next = null;
    }
    //定义链表为空时，首尾节点为空，新增节点后，各自指向首尾节点
    let head = null,  //头节点
        length = 0,   //节点长度
        tail = null;  //尾节点

    /**
     * 向单向链表尾部添加元素
     * @param  {Any} data 要加入链表的节点
     */
    this.append = function(data) {
        //创建新节点
        var newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode
            tail = newNode
        }
        length+=1;
        return true;
    };
    
    /**
     * 打印链表节点
     */
    this.print = function(){
        let currentNode = head,
            strLink = '';
        while(currentNode){
            strLink += currentNode.data.toString() + '->'
            currentNode = currentNode.next
            strLink += 'null';
            console.log(strLink)
            console.log("长度为"+length.toString())
        }
    }
    /**
     * 指定位置插入节点
     * 关键是找到索引所在位置
     */
    // this.insert = function(index,data){
    //     if(index<0 || index<length){
    //         return false
    //     }else if(index == length){
    //         return this.append(data)
    //     }else{
    //         var newNode = new Node(data)
    //         if(index == 0){
    //             newNode.next = head;
    //             head = newNode;
    //         }else{
    //             let insertIndex = 1,
    //                 currentNode = head;
    //             //找到插入位置的前一个节点
    //             while(insertIndex < index){
    //                 insertIndex += 1;
    //                 currentNode = currentNode.next;
    //             }
    //             //index = 1,currentNode指向head,为第一个节点
    //             let nextNode = currentNode.next  //nextNode是 第二个节点
    //             //第一个节点指向新节点
    //             currentNode.next = newNode;
    //             //新节点指向第二个节点
    //             newNode.next = nextNode
    //         }
    //         length += 1
    //         return true
    //     }
    // }
    /**
     * 指定位置删除节点
     * 关键是找到索引所在位置
     */
    // this.remove = function(index){
    //     //参数不合法
    //     if(index<0 || index>=length){
    //         return null
    //     }else{
    //         var delNode = null
    //         //删除的是头节点
    //         if(index == 0){
    //             delNode = head;
    //             head = head.next;
    //         }else{
    //             let delIndex = 0,
    //                 preNode = null, //被删除节点前一个
    //                 currentNode = head;  //被删除的节点
    //             while(delIndex<index){
    //                 delIndex += 1;
    //                 preNode = currentNode;
    //                 currentNode =currentNode.next
    //             }
    //             delNode = currentNode
    //             //被删除的前一个节点指向，被删除节点的后一个节点
    //             preNode.next = currentNode.next
    //             //如果被删除的节点为尾节点
    //             if(currentNode.next == null){
    //                 tail = preNode
    //             }
    //         }
    //         length -= 1
    //         delNode.next = null
    //         return delNode.data;
    //     }
    // }
    /**
     * 返回指定位置节点的值
     */
    // this.get = function (index){
    //     if(index<0 || index>=length){
    //         return null
    //     }
    //     let nodeIndex = 0,
    //         currentNode = head;
    //     while(nodeIndex < index){
    //         nodeIndex += 1;
    //         currentNode = currentNode.next;
    //     }
    //     return currentNode.data;
    // }





    /**
     * 获取指定位置的节点
     */
    var getNode = function(index){
        if(index < 0 || index >= length){
            return null
        }
        var currentNode = head;
        var nodeIndex = index;
        while(nodeIndex-- > 0){
            currentNode = currentNode.next
        }
        return currentNode
    }
    this.get = function(index){
        let node = getNode(index)
        if(node){
            return node.data;
        }
        return null
    }
    this.insert = function(index,data){
        if(index<0 || index<length){
            //索引范围错误
            return false
        }else if(index == length){//index == length 说明在为节点的后面新增，直接调用append即可
            return this.append(data)
        }else{
            var newNode = new Node(data)
            if(index == 0){
                //如果在头节点插入，新的节点就变成头节点
                newNode.next = head;
                head = newNode;
            }else{
                //要出入的位置是index,找到索引为index-1的节点，然后进行链接
                let preNode = getNode(index-1)
                nowNode.next = preNode.next;
                preNode.next = newNode;
            }
            length += 1
            return true
        }
    }
    this.remove = function(index){
        //参数不合法
        if(index<0 || index>=length){
            return null
        }else{
            var delNode = null
            //删除的是头节点
            if(index == 0){
                delNode = head;
                head = head.next;
                //如果head == null,说明之前的链表只有一个节点
                if(!head){
                    tail = null
                }
            }else{
                //找到索引为index-1的节点
                let perNode = getNode(index-1);
                delNode = preNode.next;
                preNode.next = preNode.next.next
                //如果删除的是尾节点
                if(delNode.next == null){
                    tail = preNode
                }
            }
            length -= 1
            delNode.next = null
            return delNode.data;
        }
    }






    /**
     * 返回链表尾节点
     */
    this.tail = function (){
        return this.get(length - 1)
    }
    /**
     * 删除链表尾节点
     */
    this.remove_tail = function (){
        return this.remove(length - 1)
    }
    this.remove_head = function (){
        return this.remove(0)
    }
    /**
     * 寻找某个元素在单向链表中的位置
     */
    this.indexOf = function(data) {
        var currentNode = head;
        var index = -1;
        while (currentNode) {
            index+=1
            if (data === currentNode.data) {
                return index;
            }else{
                currentNode = currentNode.next;
            }   
        }
        return -1;
    };
    /**
     * 获取单链表头部
     */
    this.getHead = function() {
        // return head;
        return this.get(0)
    }
    /**
     * 获取单链表长度
     */
    this.size = function() {
        return length;
    };
    /**
     * isEmpty
     */
    this.isEmpty = function (){
        return length == 0
    }
    /**
     * 清空列表
     */
    this.clear = function(){
        this.head = null;
        this.tail = null;
    }
}


var link = new LinkList()
link.append(2)
link.append(4)
link.append(6)
// console.log(link.insert(0,5))
// console.log(link.print())
















//链表实现栈
function Stack(){
    let linkList = new LinkList()
    //添加
    this.push = (item) => {
        linkList.append(item)
    }
    //弹出栈顶
    this.pop = () => {
        return linkList.remove_tail()
    }
    //获取栈顶元素
    this.top = () => {
        return linkList.tail()
    }
    //size
    this.size = () => {
        return linkList.size()
    }
    //isEmpoty
    this.isEmpty = () => {
        return linkList.isEmpty()
    }
    //清空
    this.clear = function (){
        linkList.clear()
    }
}
var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(5)
stack.push(9)
// console.log(stack.pop())
// console.log(stack.top())
// console.log(stack.size())
// console.log(stack.isEmpty())
stack.clear()
console.log(stack.pop())





//队列
function Queue(){
    let linkList = new LinkList()
    //入队
    this.enqueue = (item) => {
        linkList.append(item)
    }
    //出队
    this.dequeue = () => {
        return linkList.remove(0)
    }
    //队首
    this.head = () => {
        return linkList.getHead()
    }
    //队尾
    this.tail = function(){
        return linkList.tail()
    }
    //size
    this.size = function(){
        return linkList.size()
    }
    this.isEmpty = () => {
        return linkList.isEmpty()
    }
    this.clear = () => {
        linkList.clear()
    }
}
let queue = new Queue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue())