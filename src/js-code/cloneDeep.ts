/**
 * 深拷贝
 * @param obj obj
 * @param map weakmap 为了避免循环引用
 */
function cloneDeep(obj: any, map = new WeakMap()): any {
    if (typeof obj !== 'object' || obj === null) return obj;
    // 避免循环引用
    const objFromMap = map.get(obj);
    if (objFromMap) return objFromMap;

    let cloned: any = {};
    map.set(obj, cloned);

    // Map
    if (obj instanceof Map) {
        cloned = new Map();
        obj.forEach((val, key) => {
            const v = cloneDeep(val, map);
            const k = cloneDeep(key, map);
            cloned.set(k, v);
        });
    }

    // Set
    if (obj instanceof Set) {
        cloned = new Set();
        obj.forEach((val) => {
            const v = cloneDeep(val, map);
            cloned.add(v);
        });
    }

    // Array
    if (obj instanceof Array) {
        cloned = obj.map((item) => cloneDeep(item, map));
    }

    // Object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const val = cloneDeep(obj[key], map);
            cloned[key] = val;
        }
    }

    return cloned;
}

const obj = {
    x: 1,
    y: { v: 2 },
    z: new Set(),
};

const c = cloneDeep(obj);
