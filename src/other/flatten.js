function flatten(arr) {

    // рекурсия с reduce
    // return arr.reduce((acc, num) => acc.concat(Array.isArray(num) ? flatten(num) : num), [])

    // return arr.flat(Infinity)  // позволяет "сплющить" вложенный массив до указанной глубины.

    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}


console.log(flatten([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]
console.log(flatten([[['a']], 'b', [['c', ['d']]]])); // Output: ['a', 'b', 'c', 'd']