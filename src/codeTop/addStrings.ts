/**
 * 字符串相加
 * @param num1
 * @param num2
 * @returns
 */
function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0; // 进位
    let result = ''; // 结果

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i], 10) : 0; // 获取 nums[i] 的当前位，如果超出则为 0;
        const digit2 = j >= 0 ? parseInt(num2[j], 10) : 0; // 获取 nums[j] 的当前位，如果超出则为 0;

        const sum = digit1 + digit2 + carry; // 当前位的和
        carry = Math.floor(sum / 10); // 更新进位
        result = (sum % 10).toString() + result; // 将当前位的结果拼接到结果字符串的前面

        i--;
        j--;
    }

    return result;
}

// console.log(addStrings('11', '123'));
console.log(addStrings('456', '77')); // 输出："533"
