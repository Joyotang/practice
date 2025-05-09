class LRUCache {
    private length: number;
    private data: Map<any, any> = new Map();

    constructor(length: number) {
        if (length < 1) throw new Error('invalid length');
        this.length = length;
    }
    set(key: any, value: any) {
        const data = this.data;
        if (data.has(key)) {
            data.delete(key);
        }
        data.set(key, value);
        if (data.size > this.length) {
            // 如果 size 超出了容量，则删除最老的数据
            const dataKey = data.keys().next().value;
            data.delete(dataKey);
        }
    }
    get(key: any) {
        const data = this.data;
        if (!data.has(key)) return null; // 如果没有，则直接返回空

        const value = data.get(key);

        // 先删除，再重新设置值，则保持最前（新鲜度）
        data.delete(key);
        data.set(key, value);
        return value;
    }
}
