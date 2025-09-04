let summation = function (num) {

    // return num * (num +1) / 2 // Использование формулы суммы арифметической прогрессии Работает за O(1)

    let res = 0
    for (let i = 1; i <= num; i++) {
        res += i
    }
    return res

}

console.log(summation(1))
console.log(summation(8))
console.log(summation(22))