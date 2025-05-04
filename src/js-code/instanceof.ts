function myInstanceof(instance: any, origin: any) {
    if (instance == null) return false; // null undefined
    const type = typeof instance;
    if (type !== 'object' && type !== 'function') return false; // 值类型
    let tempInstance = instance;
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true; // 匹配上了
        }
        // 为匹配，顺着原型往上找
        tempInstance = tempInstance.__proto__;
    }
    return false;
}
