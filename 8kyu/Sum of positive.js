function positiveSum(arr) {

    // через цикл for
// let sum = 0
//     for(const num of arr) {
//         if(num > 0) {
//             sum+=num
//         }
//     }
//     return sum

    // через reduce
    return arr.reduce((acc, num) => num > 0 ? acc + num : acc, 0) // 0 - начальное значение acc

}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, 2, 3, 4, 5]));