function points(games) {
    return games.reduce((total, game) => {
        const [x, y] = game.split(':').map(Number);
        return total + (x > y ? 3 : x === y ? 1 : 0);
    }, 0);
}

console.log(points(['3:1', '2:2', '0:1'])); // Example 1
console.log(points(['1:0', '0:0', '2:1'])); // Example 2
console.log(points(['0:3', '1:1', '4:2'])); // Example 3