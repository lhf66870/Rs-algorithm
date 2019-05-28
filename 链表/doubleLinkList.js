//节点类
function Node(data){
    this.data = data;
    this.next = null;
}

let node1 = new Node(1) 
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)

function doubleLinkList(){
    //定义节点
    let Node = function(data){
        this.data = data; //数据域
        this.next = null; //后继指针
        this.prev = null;
    }
    let head = null,  //头节点
        length = 0,   //节点长度
        tail = null;  //尾节点
    this.insert = (newElement,item) => {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
    }
    this.remove = (item) => {
        var currNode = this.find(item);
        if(!(currNode.next == null)){
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
        }
    }
    this.findLast = () => {
        var currNode = this.head;
        while (!(currNode.next == null)){
            currNode = currNode.next;
        }
        return currNode;
    }
}

// function Node(element){
//     this.element = element;
//     this.next = null;
//     this.previous = null;
// }

// function LList(){
//     this.head = new Node('head');
//     this.find = find;
//     this.insert = insert;
//     this.display = display;
//     this.remove = remove;
//     this.findLast = findLast;
//     this.dispReverse = dispReverse;
// }

// function dispReverse(){
//     var currNode = this.head;
//     currNode = this.findLast();
//     while (!(currNode.previous == null)){
//         document.write(currNode.element + '&nbsp;');
//         currNode = currNode.previous;
//     }
// }

// function findLast(){
//     var currNode = this.head;
//     while (!(currNode.next == null)){
//         currNode = currNode.next;
//     }
//     return currNode;
// }

// function remove(item){
//     var currNode = this.find(item);
//     if(!(currNode.next == null)){
//         currNode.previous.next = currNode.next;
//         currNode.next.previous = currNode.previous;
//         currNode.next = null;
//         currNode.previous = null;
//     }
// }

// function display(){
//     var currNode = this.head;
//     while (!(currNode.next == null)){
//         document.write(currNode.next.element + '&nbsp;');
//         currNode = currNode.next;
//     }
// }

// function find(item){
//     var currNode = this.head;
//     while (currNode.element != item){
//         currNode = currNode.next;
//     }
//     return currNode;
// }

// function insert(newElement , item){
//     var newNode = new Node(newElement);
//     var current = this.find(item);
//     newNode.next = current.next;
//     newNode.previous = current;
//     current.next = newNode;
// }


// var cities = new LList();
// cities.insert('Conway','head');
// cities.insert('Russellville', 'Conway');
// cities.insert('Carlisle', 'Russellville');
// cities.insert('Alma' , 'Carlisle');
// cities.display();
// document.write('<br>');
// cities.remove('Carlisle');
// cities.display();
// document.write('<br>');
// cities.dispReverse();