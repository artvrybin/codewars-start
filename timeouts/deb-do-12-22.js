const tick = (time) => {
    return new Promise((res) => {
        setTimeout(res, time)
    })
}

//code start
const debounce = () => {
    //-------------





    //-------------
}
//code end

const fn = (number) => {
    console.log(number)
}

const debounceFn = debounce(fn, 1000)

const testFunction = async () => {

    debounceFn(1)
    debounceFn(2)
    await tick(500)
    debounceFn(3)
    await tick(1000)
    debounceFn(4)
}

testFunction() // 3,4