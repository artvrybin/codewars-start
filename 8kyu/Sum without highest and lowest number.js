function sumArray(array) {

    // if (array && array.length > 2) {
    //     let sorted = array.sort((a, b) => a - b) //  Минусы: sort() изменяет исходный массив и работает за O(n log n).
    //     return sorted.slice(1, -1).reduce((acc, num) => acc + num, 0)
    // }
    // return 0

    // if (!array || array.length <= 2) return 0;
    // let min = Math.min(...array);
    // let max = Math.max(...array);
    // return array.reduce((acc, num) => acc + num, 0) - min - max;

    // if (!array || array.length <= 2) return 0;
    // return array.reduce((acc, num, i, arr) => {
    //     let min = Math.min(...arr);
    //     let max = Math.max(...arr);
    //     return acc + (num !== min && num !== max ? num : 0);
    // }, 0); // удаляет все минимальные и максимальные значения.

    if (!array || array.length <= 2) return 0;

    let min = Infinity, max = -Infinity, sum = 0;

    for (let num of array) {
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return sum - min - max; // Плюсы: Работает за O(n)

}

console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([1, 1, 11, 2, 3]))
console.log(sumArray([15, 10, 9, 8, 23]))
console.log(sumArray([]))
console.log(sumArray(null))
console.log(sumArray(undefined))
console.log(sumArray([1]))
