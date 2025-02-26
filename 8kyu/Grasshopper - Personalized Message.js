function greet(name, owner) {

    // return {
    //     [owner.toLowerCase()]: "Hello boss",
    // }[name.toLowerCase()] || "Hello guest";

    //Создаём объект { owner: "Hello boss" }
    // Если name есть в объекте — получаем "Hello boss", иначе "Hello guest"

    return name.toUpperCase() === owner.toUpperCase() ? 'Hello boss' : 'Hello guest'

}

console.log(greet('John', 'john'))
console.log(greet('Paul', 'paul'))
console.log(greet('Astrocat', 'sarah'))