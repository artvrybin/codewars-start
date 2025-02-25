function getGrade(s1, s2, s3) {

    // через массив
    //   const mid = Math.floor((s1 + s2 + s3) / 3 / 10);
    //  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A', 'A'][mid] || 'F';

    let mid = (s1 + s2 + s3) / 3
    if (mid >= 90) return 'A'
    if (mid >= 80) return 'B'
    if (mid >= 70) return 'C'
    if (mid >= 60) return 'D'
    return 'F'
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(89, 89, 90));
console.log(getGrade(50, 50, 45));

