/**
 * Given an array of integers, find the one that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 * Examples [7] should return 7, because it occurs 1 time (which is odd). [0]
 * should return 0, because it occurs 1 time (which is odd). [1,1,2] should
 * return 2, because it occurs 1 time (which is odd). [0,1,0,1,0] should return
 * 0, because it occurs 3 times (which is odd). [1,2,2,3,3,3,4,3,3,3,2,2,1]
 * should return 4, because it appears 1 time (which is odd).
 */

// function findOdd(A) {
//   const counts = {};
//   for (let num of A) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   for (let num in counts) {
//     if (counts[num] % 2 !== 0) {
//       return Number(num);
//     }
//   }
// }

function findOdd(A) {
  const counts = A.reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map());

  for (let [num, count] of counts) {
    if (count % 2) return num;
  }
}

console.log(findOdd([7])); // Expected output: 7
console.log(findOdd([0])); // Expected output: 0
console.log(findOdd([1, 1, 2])); // Expected output: 2
console.log(findOdd([0, 1, 0, 1, 0])); // Expected output: 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Expected output: 4
