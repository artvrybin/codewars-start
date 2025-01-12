const tick = (time) => {
    return new Promise((res) => {
        setTimeout(res, time)
    })
}

//code start
const debounce = (callback, delay) => {
    let timerId
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}
//code end

const fn = (number) => {
    console.log(number)
}

//1
const debounceFn = debounce(fn, 1000)
//2
const debounceFn2 = debounce(fn, 1000)


const testFunction = async () => {

    debounceFn(1)
    debounceFn(2)
    await tick(500)
    debounceFn(3)
    debounceFn2(5)
    await tick(1000)
    debounceFn(4)
}

testFunction() // 3,4

/*
    Нужно реализовать функцию debounce, которая ограничивает частоту вызова переданной функции. Основной принцип работы
   debounce заключается в том, что вызов функции откладывается на заданное время. Если в течение этого времени
   происходит новый вызов, таймер сбрасывается, и функция снова откладывается.
    В консоли должно быть выведено 3,4 в варианте-1
    Доп. вопрос: что быдет в консоли в варианте-2? И почему? (Ответ: 3,4,5. Т.к. для второго варианта создается новый таймар и новый timerId)
    Доп. задание: типизировать параметры функций.
*/

