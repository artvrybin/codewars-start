// Set — это структура данных, которая хранит только уникальные значения. Если количество элементов в строке
// и количество символов в Set совпадают, значит, все символы уникальны.

// const isUnique = (str) => {
//     return new Set(str).size === str.length
// }


//Э тот вариант использует обычный объект для хранения информации о том, встречался ли уже символ.

// const isUnique = (str) => {
//     let charMap = {}
//     for (let char of str) {
//         if (charMap[char])  {
//             return false
//         }
//         charMap[char] = true
//     }
//     return true
// }
//
// console.log(isUnique('asdASD')) // true
// console.log(isUnique('')) // true
// console.log(isUnique('1234567890')) // true
// console.log(isUnique('asad')) // false

// -------------------------------------------------------------

// const removeDupes = (str) => {
//     let uniqueChars = {};
//     let result = '';
//     for (let char of str) {
//         if (!uniqueChars[char]) {
//             uniqueChars[char] = true;
//             result += char
//         }
//     }
//     return result
// } // Доступ к свойству объекта осуществляется за O(1), что быстрее, чем метод includes() у массива, который работает за O(n).

// const removeDupes = (str) => {
//     return Array.from( new Set(str)).join('')
// }

const removeDupes = (str) => {
    let uniqueChars = [];
    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }
    return uniqueChars.join('');
}

console.log(removeDupes('asdasd')) //asd
console.log(removeDupes('')) //''
console.log(removeDupes('zxcZXC')) //zxcZXC
console.log(removeDupes('asd1111111asd')) //asd1