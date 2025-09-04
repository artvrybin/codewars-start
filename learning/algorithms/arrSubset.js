function arrSubset(source, target) {

  if(source.length < target.length) return false;

  for (let i = 0; i < target.length; i++) {
    let copy = [...source]
    const index = copy.indexOf(target[i]);
    if (index === -1) return false;
    delete copy[index];
  }
  return true

}

console.log(arrSubset([1, 2, 3, 4], [1, 2])) // true
console.log(arrSubset([1, 2, 3, 4], [5, 6])) // false
console.log(arrSubset([1, 2, 3, 4], [1, 2, 3, 4, 5])) // false