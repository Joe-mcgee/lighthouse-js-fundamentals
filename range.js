function range(start, end, step) {
  var array = [];
  var checkArray = [start, end, step];
  for (var i = 0; i <= checkArray.length; i++) {
    if (checkArray[i] === undefined) {
      return array;
    } else if (start > end) {
        return array;
    } else if (step < 0) {
        return array;
    } else {
        for (var i = start; i <= end; i = i + step) {
          array.push(i);
      }
      return array;
    }
  }
}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(undefined, 2, 3));