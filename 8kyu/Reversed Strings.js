function solution(str){
// return str.split('').reverse().join('')

    //через for
    let newArr = []
    for (let i = str.length-1; i >=0; i--) {
        newArr += str[i]
    }
    return newArr
}

console.log(solution("world"));
console.log(solution("hello"));
console.log(solution("JavaScript"));