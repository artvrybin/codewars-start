// const obj = {
//     name: 'John',
//     greet: function () {
//         const foo1 = () => {
//             console.log('foo1', this.name)
//         }
//
//         function  foo2() {
//             console.log('foo2', this.name)
//         }
//         foo1()
//         foo2()
//     }
// }
// obj.greet()

//--------------------

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