function repeatStr (n, s) {
    // через repeat
    // return s.repeat(n)

    // через for
    let res = ''
    for(let i = 0; i < n; i++) {
        res += s
    }
    return res
}

console.log(repeatStr(3, 'a'));
console.log(repeatStr(5, 'hello'));
console.log(repeatStr(2, 'abc'));