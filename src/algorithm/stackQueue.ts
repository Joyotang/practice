/**
 * 使用两个栈实现队列
 */
class stackQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];
    // 入队
    add(n: number) {
        this.stack1.push(n);
    }
    // 出队
    delete(): number | null {
        let res;
        const stack1 = this.stack1;
        const stack2 = this.stack2;

        // 第一步：将 stack1 所有元素移动到 stack2 中
        while (stack1.length) {
            const n = stack1.pop()!;
            if (n !== null) {
                this.stack2.push(n);
            }
        }

        // 第二步：stack2 pop(出栈)
        res = stack2.pop();

        // 第三步：将 stack2 所有元素 “还给” stack1
        while (stack2.length) {
            const n = stack2.pop()!;
            if (n !== null) {
                this.stack1.push(n);
            }
        }

        return res || null;
    }

    get length(): number {
        return this.stack1.length;
    }
}
