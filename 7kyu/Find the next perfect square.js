function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq)
  if(!Number.isInteger(sqrt)) return -1
  return Math.pow(sqrt + 1, 2)
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));