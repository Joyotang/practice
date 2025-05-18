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

function convertArrToTree(arr: IArrayItem[]): ITreeNode | null {
    const idTreeNode: Map<number, ITreeNode> = new Map(); // 用于 id 和 treeNode 的映射
    let root = null;

    arr.forEach((item) => {
        const { id, name, parentId } = item;
        // 定义 treeNode 并加入 map
        const treeNode: ITreeNode = { id, name };
        idTreeNode.set(id, treeNode);

        // 找到 parentNode 并加入到它的 children
        const parentNode = idTreeNode.get(parentId);
        if (parentNode) {
            if (parentNode.children == null) parentNode.children = [];
            parentNode.children.push(treeNode);
        }
        // 找到根节点
        if (parentId === 0) root = treeNode;
    });

    return root;
}

const arr = [
    { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
];
const tree = convertArrToTree(arr);
console.info(tree);
