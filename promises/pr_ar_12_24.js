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