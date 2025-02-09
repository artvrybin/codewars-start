const obj = {
    name: 'John',
    greet: function () {
        const foo1 = () => {
            console.log('foo1', this.name)
        }

        function  foo2() {
            console.log('foo2', this.name)
        }
        foo1()
        foo2()
    }
}
obj.greet()

//--------------------
