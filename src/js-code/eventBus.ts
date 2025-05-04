class EventBus {
    private events: {
        [key: string]: Array<{ fn: Function; isOnce: boolean }>;
    };
    constructor() {
        this.events = {};
    }

    on(type: string, fn: Function, isOnce: boolean = false) {
        if (!this.events[type]) this.events[type] = []; // 初始化 key 的 fn 数组
        this.events[type].push({ fn, isOnce });
    }
    once(type: string, fn: Function) {
        this.on(type, fn, true);
    }
    off(type: string, fn?: Function) {
        if (!fn) {
            // 解绑所有 type 的函数
            this.events[type] = [];
        } else {
            // 解绑单个 type 的函数
            this.events[type] = this.events[type].filter(
                (item) => item.fn !== fn
            );
        }
    }
    emit(type: string, ...args: []) {
        const fnList = this.events[type];
        if (!fnList.length) return null;
        // 注意，使用 filter 可以执行的同时顺便过滤掉 once 的函数
        this.events[type] = fnList.filter((item) => {
            item.fn(...args);

            if (!item.isOnce) return true; // once 执行一次就要被过滤掉
            return false;
        });
    }
}
