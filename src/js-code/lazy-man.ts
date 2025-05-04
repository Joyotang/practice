class LazyMan {
    private name: string = '';
    private tasks: Function[] = [];
    constructor(name: string) {
        this.name = name;
        setTimeout(() => {
            this.next();
        }, 0);
    }
    next() {
        const task = this.tasks.shift(); // 取出当前 tasks 的第一个任务
        if (task) task(); // 立刻执行下一个任务
    }
    eat(food: string) {
        const task = () => {
            console.log(`${this.name} eat ${food}`);
            this.next();
        };
        this.tasks.push(task);
        return this; // 链式调用
    }
    sleep(seconds: number) {
        const task = () => {
            console.log('开始睡觉');
            setTimeout(() => {
                console.log(
                    `${this.name} 已经睡了 ${seconds}s, 开始执行下一个任务`
                );
                this.next();
            }, seconds * 1000);
        };
        this.tasks.push(task);
        return this; // 链式调用
    }
}

const me = new LazyMan('Joyo');
me.eat('apple').eat('banana').sleep(2).eat('orange');
