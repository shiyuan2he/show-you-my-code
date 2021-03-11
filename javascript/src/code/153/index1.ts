/**
 * 解法2
 * 338. 比特位计数
 * https://leetcode-cn.com/problems/counting-bits/
 * @param num 
 */
const countBits1 = (num: number): number[] => {
    const res: number[] = [];
    for(let i = 0; i <= num; i ++){
        let diff = i;
        let sum = 0
        while(diff > 0) {
            console.log('diff=',diff)
            sum += (diff % 2)
            diff = Math.floor(diff / 2);
        }
        res.push(sum)
    }
    console.log(`num=${num}, res=${res}`)
    return res
}

countBits1(1)
// countBits(10)