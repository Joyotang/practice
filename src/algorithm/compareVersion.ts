function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const maxLen = Math.max(v1.length, v2.length);

    for (let i = 0; i < maxLen; i++) {
        const num1 = i < v1.length ? v1[i] : 0; // 如果 v1[i] 不存在，默认为 0
        const num2 = i < v2.length ? v2[i] : 0; // 如果 v2[i] 不存在，默认为 0

        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }

    return 0; // 全部相等
}
console.log(compareVersion('1.01', '1.001'));
