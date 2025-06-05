interface ILinkListNode {
    value: number;
    next?: ILinkListNode;
}

/**
 * 根据数组创建单向链表
 * @param arr
 */
function createLinkList(arr: number[]): ILinkListNode {
    const length = arr.length;
    if (length === 0) throw new Error('arr is empty');

    let curNode: ILinkListNode = {
        value: arr[length - 1],
    };

    if (length === 1) return curNode;

    for (let i = arr.length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        };
    }

    return curNode;
}

const linkList = createLinkList([100, 200, 300, 400]);
console.log(linkList);

function reverseLink(linkNode: ILinkListNode): ILinkListNode {
    let prevNode: ILinkListNode | undefined = undefined;
    let curNode: ILinkListNode | undefined = undefined;
    let nextNode: ILinkListNode | undefined = linkNode;

    while (nextNode) {
        // 第一个元素，删掉 next 防止循环引用
        if (curNode && !prevNode) {
            // @ts-ignore
            delete curNode.next;
        }

        // 反转指针
        if (curNode && prevNode) {
            // @ts-ignore
            curNode.next = prevNode;
        }

        // 整体向后移动指针
        prevNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next;
    }

    // 最后一个补充：最后一个之前 next 为空，所以不会进入 while 循环，此时 curNode 尚未设置 next，所以需要将它的 next 指向上一个
    curNode!.next = prevNode;

    return curNode!;
}

const reverseList = reverseLink(linkList);
console.log(reverseList);
