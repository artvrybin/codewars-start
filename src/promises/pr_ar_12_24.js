function fetchData() {
    return new Promise((resolve, reject) => {
        resolve('Success')
    })
}

fetchData().then((data) => {
    console.log(data)
})

async function foo2() {
    const res = await fetchData()
    console.log(res)
}

foo2()


 // ---------------------------------------

async function ex1() {
    console.log('5')

    const promise = new Promise ((resolve) => {
        console.log('1')
        resolve('2')
    })
    console.log('6')
    console.log(await promise)
    console.log('3')
}
ex1()