/**
 * Implement a function that computes the difference between two lists. The
 * function should remove all occurrences of elements from the first list (a)
 * that are present in the second list (b). The order of elements in the first
 * list should be preserved in the result.
 *
 * If a = [1, 2] and b = [1], the result should be [2].
 *
 * If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
 */

// function arrayDiff(a, b) {
//   let res = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       res.push(a[i]);
//     }
//   }
//   return res;
// }

// function arrayDiff(a, b) {
//   let res = [];
//   for (let i = 0; i < a.length; i++) {
//     let f = false;
//
//     for (let j = 0; j < a.length; j++) {
//       if (a[i] === b[j]) {
//         f = true;
//       }
//     }
//
//     if (!f) {
//       res.push(a[i]);
//     }
//   }
//
//   return res;
// }

function arrayDiff(a, b) {
  return a.filter((i) => !b.includes(i));
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1, 3]
console.log(arrayDiff([1, 2, 3], [])); // [1, 2, 3]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 2], [1, 2])); // []
