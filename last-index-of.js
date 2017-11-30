function lastIndexOf (array, value) {
  var output = [];
  var existence = false;
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === value) {
      output = i;
      existence = true;
    }
  }
  if (existence === false) {
    output = -1;
  }

  return output;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);