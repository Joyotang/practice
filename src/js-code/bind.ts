// @ts-ignore
Function.prototype.customBind = function (context: any, ...bindArgs: any[]) {
    // context 是 bind 传入的 this
    // bindArgs 是 bind 传入的参数
    const self = this;
    return function (...args: any[]) {
        const newArgs = bindArgs.concat(args); // 拼接参数
        self.apply(context, newArgs);
    };
};
