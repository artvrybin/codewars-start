function findSmallestInt(arr) {

    // return Math.min(...arr)

    return arr.reduce((acc, num) => num < acc ? num : acc)
    // нет initial значения, поэтому значение acc будет равным первому значению в массиве,
    // а значение num будет равным второму значению в массиве.
}

console.log(findSmallestInt([78, 56, -232, 12, 8]));
console.log(findSmallestInt([63, 29, 4, 42]));
console.log(findSmallestInt([34, 15, 88, 3]));