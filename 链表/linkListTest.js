function Node(data){ 
    this.data = data;
    this.next = null;
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5

function print(head){
    let currentNode = head
    while(currentNode){
        console.log(currentNode.data)
        currentNode = currentNode.next
    }
}


//迭代反转
/**
 * 考虑边界情况会让问题见到，但并不具备普遍性，尝试考虑中间情况
 * 假设链表中间某个点 为 currentNode 前一个节点preNode,后一个节点nextNode,
 * 吧思路聚集在currentNode,考虑在着一个点上翻转（currentNode = preNode）
 * 对于头节点，让preNode = null ,表示他的节点是一个空节点
 * 遍历过程中，每完成一个节点翻转，都让currentNode = nextNode,找到下一个需要翻转的节点，同事
 * preNode和nextNode也跟随currentNode一起向后滑动
 */
function reverseIter(head){
    if(!head){
        return null
    }
    let perNode = null,//前一个节点
        currentNode = head; //当前反转节点
    while(currentNode){
        let nextNode = currentNode.next; //下一个节点
        currentNode.next = perNode; //对当前节点进行反转
        perNode = currentNode; //perNode向后滑动
        currentNode = nextNode //currenNode 向后滑动
    }
    //最后要返回preNode,当循环结束后，preNode指向翻转前链表的最后一个节点
    return perNode
}
// print(reverseIter(node1))

//递归翻转链表  甩锅
/**
 * 1。明确函数功能，reverseDg(head)是从head开始的，返回值是反转后的头节点
 * 2.var newHead = reverseDg(head),原本以head开头链表翻转，不会，那就让别人从head.next开始翻转，等他反转完成，得到的newHead就是反转后的头节点
 * 3.根据别人的计算结果，计算自己结果（我从谁开始反转，尾节点就是谁next）,链接head.next.next = head
 * 4.找到递归的终止条件；新链表的头是旧链表的尾，遇到尾节点，返回头节点
 */
function reverseDg(head){
    if(!head){
        return null
    }
    if(head.next == null){
        return head
    }
    //从下一个节点开始进行翻转
    let newHead = reverseDg(head.next)
    head.next.next = head;//当前节点链接到新链表
    head.next = null
    return newHead
}
print(reverseDg(node1))