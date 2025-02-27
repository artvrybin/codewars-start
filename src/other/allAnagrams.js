function allAnagrams(arr) {
  const sorted = arr.map((word) => word.split('').sort().join(''));

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0]) return false
  }
  return true
}


console.log(allAnagrams(['listen', 'silent', 'enlist'])); // true
console.log(allAnagrams(['hello', 'world'])); // false
console.log(allAnagrams(['abc', 'cab', 'bac'])); // true