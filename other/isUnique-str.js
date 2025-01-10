// Set — это структура данных, которая хранит только уникальные значения. Если количество элементов в строке
// и количество символов в Set совпадают, значит, все символы уникальны.

// const isUnique = (str) => {
//     return new Set(str).size === str.length
// }


//Э тот вариант использует обычный объект для хранения информации о том, встречался ли уже символ.

const isUnique = (str) => {
    let charMap = {}
    for (let char of str) {
        if (charMap[char])  {
            return false
        }
        charMap[char] = true
    }
    return true
}

console.log(isUnique('asdASD')) // true
console.log(isUnique('')) // true
console.log(isUnique('1234567890')) // true
console.log(isUnique('asad')) // false