function countSheeps(sheep) {

    // return sheep.filter(Boolean).length

//  arr.filter(Boolean) фильтрует массив, оставляя только те элементы, которые являются "истинными" (в данном случае,
//  те, которые равны true).
// .length возвращает количество элементов в отфильтрованном массиве, т.е. количество овец, присутствующих в массиве.

    //через for
    let count = 0
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            count++
        }
    }
    return count
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));