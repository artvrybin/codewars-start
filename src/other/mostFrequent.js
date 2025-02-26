function mostFrequentElement(arr) {

    if (!Array.isArray(arr)) return null;
    if (!arr.length) return null;
    let map = {}
    let result = null
    let count = 0
    for(let num of arr) {
        if(!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
        if(map[num] > count) {
            count = map[num]
            result = num
        }
    }
    return  result
}

console.log(mostFrequentElement(1)); // 1
console.log(mostFrequentElement([1, 2, 3, 1, 2, 1, 4, 1])); // 1
console.log(mostFrequentElement(["apple", "banana", "apple", "orange", "banana", "banana"])); // "banana"
console.log(mostFrequentElement([true, false, true, true, false])); // true
console.log(mostFrequentElement([])); // null
