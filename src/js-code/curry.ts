// function add(a, b, c) {
//     return a + b + c;
// }
// add(1, 2, 3); // 6

// const curryAdd = curry(add);
// curryAdd(1)(2)(3); // 6

/**
 * 柯里化函数
 * @param fn
 * @returns
 */
function curry(fn: Function) {
    const fnArgsLength = fn.length; // 传入函数的参数长度
    let args: any[] = [];
    // ts 中，独立的函数，this 需要声明类型
    const calc = function (this: any, ...newArgs: any[]) {
        // 积累参数
        args = [...args, ...newArgs];
        // 参数不够，返回函数
        if (args.length < fnArgsLength) {
            return calc;
        } else {
            // 参数够了，返回执行结果
            fn.call(this, args.slice(0, fnArgsLength));
        }
    };
    return calc;
}
