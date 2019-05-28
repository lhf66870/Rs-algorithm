function Node(data){ 
    this.data = data;
    this.next = null;
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)
let node8 = new Node(8)
let node9 = new Node(9)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5

node6.next = node7;
node7.next = node8;
node8.next = node9;





//从头到尾打印链表，不允许翻转链表
function reversePrint(head){
    //递归终止条件
    if(head == null){
        return
    }else{
        reversePrint(head.next)//甩锅
        console.log(head.data)//后面都已打印，该打印自己了
    }
}
reversePrint(node1)

//已知两个有序链表（元素由小到大），将两个链表合成一个有序链表，并返回新链表，原有两个链表不修改

/**
 * 对两个链表各自设置游标节点，队友表节点数值比较，小的放入合并链表，同事游标先后滑动，继续以上操作
 * while循环，当其中一个节点为null，终止循环，可能存在某一游标节点未到达尾节点，继续遍历添加到合并链表
 */
function mergeLink(head1,head2){
    if(head1 == null){
        return head2
    }else if(head2 == null){
        return head1
    }

    let mergeHead = null; //合并后头节点
    let mergeTail = null; //合并后尾节点
    let curr1 = head1,curr2 = head2;
    while(curr1 && curr2){
        //找到最小值
        let minData;
        if(curr1.data < curr2.data){
            minData = curr1.data;
            curr1 = curr1.next;//游标节点后移
        }else{
            minData = curr2.data;
            curr2 = curr2.next;
        }
        //如果一个节点都没有添加
        if(mergeHead == null){
            mergeHead = new Node(minData)
            mergeTail = mergeHead
        }else{
            let newNode = new Node(minData)
            //把newNode链接到合并链表
            mergeTail.next = newNode;
            //尾节点指向新创的节点
            mergeTail = newNode;
        }
    }
    //如果存在某部分没有合并进来
    let resLink = null;
    if(curr1){
        resLink = curr1
    }
    if(curr2){
        resLink = curr2
    }
    while(resLink){
        let newNode = new Node(resLink.data);
        mergeTail.next = newNode;
        mergeTail = newNode;
        resLink = resLink.next
    }
    return mergeHead
}


//查找单链表中倒数第K个节点（K>0）,返回其值

function linkFind(head,k){
    let fast = head,slow = head;
    let step = k;
    //先让快的游标先走K步
    while(step > 0 && fast){
        fast = fast.next;
        step -= 1;
    }
    //当循环结束时，如果step!==0,说明链表长度不够K
    if(step!=0){
        return null
    }else{   
        //快的和慢的游标一起走  [1,2,3,|4,5,6,7]
        while(fast && slow){
            fast = fast.next;
            slow = slow.next;
        }
    }
    return slow.data;
}
console.log(linkFind(node1,4))

//查找中间节点值
function linkFindMiddle(head){
    let fast = head,slow = head;
    //两个一起走，fast一次两步，slow一次一步
    while(fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}
console.log(linkFindMiddle(node1))
