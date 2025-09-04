function noSpace(x){

 // return x.split(' ').join('')

    //через for
    let res = ''
    for (let i = 0; i < x.length; i++){
        if(x[i] !== ' ') {
            res += x[i]
        }
    }
    return res

}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8j8mBliB8gimjB8B8jlB'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))