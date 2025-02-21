function squareSum(numbers){
    // цикл for of
// let sum = 0
//     for (const num of numbers) {
//         sum += num ** 2
//     }
//     return sum

    // reduce
    return numbers.reduce((acc, num) => acc + num ** 2, 0) // 0 - начальное значение acc
}

console.log(squareSum([1, 2, 3])); // Output: 14
console.log(squareSum([0, 4, 5])); // Output: 41
console.log(squareSum([-1, -2, -3])); // Output: 14