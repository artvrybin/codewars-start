function flickSwitch(arr) {

    // let bool = true
    // return arr.map(el => el === 'flick' ? bool = !bool : bool)

    // через for
    let bool = true
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            bool = !bool
        }
        res.push(bool)
    }
    return res

}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])) // [True, False, False, False]

console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']))  // [False, False, False, False]

console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])) // [True, True, False, False, True]
