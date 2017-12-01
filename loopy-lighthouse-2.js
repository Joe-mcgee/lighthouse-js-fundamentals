var numberArray = []
function rangeGenerator(min, max) {
  for (var i = min; i <= max; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function loopyLighthouse(range, multiples, words) {
  var min = range[0];
  var max = range[1];
  numberArray = rangeGenerator(min, max);
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % multiples[0] === 0 && numberArray[i] % multiples[1] === 0) {
      numberArray[i] = words[0] + words[1]
    }
    if (numberArray[i] % multiples[0] === 0) {
      numberArray[i] = words[0]
    }
    if (numberArray[i] % multiples[1] === 0) {
      numberArray[i] = words[1]
    }
  }
  for (var i1 = 0; i1 < numberArray.length; i1++) {
    console.log(numberArray[i1])
  }
}


