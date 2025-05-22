import { rotate } from '../src/algorithm/rotate';

describe('旋转数组', () => {
    test('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const res = rotate(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]); // 断言
    });
    test('数组为空', () => {
        const res = rotate([], 3);
        expect(res).toEqual([]);
    });
    test('k为0', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 0;
        const res = rotate(arr, k);
        expect(res).toEqual(arr);
    });
    test('k为负数', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = -3;
        const res = rotate(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
    test('k不是数字', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 'abc';
        // @ts-ignore
        const res = rotate(arr, k);
        expect(res).toEqual(arr);
    });
});
