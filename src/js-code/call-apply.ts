// @ts-ignore
Function.prototype.customCall = function (context: any, ...args: any[]) {
    if (context === null) context = globalThis;
    if (typeof context !== 'object') context = new Object(context); // 值类型，变为对象

    const fnKey = Symbol(); // 不会出现属性名称的覆盖
    context[fnKey] = this; // this 就是当前函数

    const res = context[fnKey](...args); // 绑定了 this, 原理：{x: 100, fn: () { this.x }}

    delete context[fnKey]; // 清理 fn，防止污染

    return res;
};

// @ts-ignore
Function.prototype.customApply = function (context: any, args: any[]) {
    if (context === null) context = globalThis;
    if (typeof context !== 'object') context = new Object(context); // 值类型，变为对象

    const fnKey = Symbol(); // 不会出现属性名称的覆盖
    context[fnKey] = this; // this 就是当前函数

    const res = context[fnKey](...args); // 绑定了 this, 原理：{x: 100, fn: () { this.x }}

    delete context[fnKey]; // 清理 fn，防止污染

    return res;
};
