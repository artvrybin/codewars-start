// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y); // your code here
  }