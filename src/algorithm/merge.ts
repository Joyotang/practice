/**
 * 合并两个有序的数组
 * @param arr1
 * @param arr2
 * @returns
 */
function merge(arr1: number[], arr2: number[]): number[] {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[i]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i), arr2.slice(j));
}

console.log(merge([1, 2, 3], [4, 5, 6]));
