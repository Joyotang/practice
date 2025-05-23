interface IArrayItem {
    id: number;
    name: string;
    parentId: number;
}

interface ITreeNode {
    id: number;
    name: string;
    children?: ITreeNode[];
}

function convertTreeToArr(root: ITreeNode): IArrayItem[] {
    // Map
    const nodeToParent: Map<ITreeNode, ITreeNode> = new Map();
    const arr: IArrayItem[] = [];
    // 广度优先遍历
    const queue: ITreeNode[] = [];
    queue.unshift(root);

    while (queue.length > 0) {
        const curNode = queue.pop();
        if (curNode == null) break;

        const { id, name, children = [] } = curNode;
        // 创建数组 item 并 push
        const parentNode = nodeToParent.get(curNode);
        const parentId = parentNode?.id || 0;
        const item = { id, name, parentId };
        arr.push(item);

        // 子节点入队
        children.forEach((child) => {
            // 映射 child
            nodeToParent.set(child, curNode);
            // 入队
            queue.unshift(child);
        });
    }

    return arr;
}

const data = {
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                { id: 4, name: '部门D' },
                { id: 5, name: '部门E' },
            ],
        },
        {
            id: 3,
            name: '部门C',
            children: [{ id: 6, name: '部门F' }],
        },
    ],
};
const arr1 = convertTreeToArr(data);
console.info(arr1);
