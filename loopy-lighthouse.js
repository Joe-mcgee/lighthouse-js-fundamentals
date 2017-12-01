var numberArray = []
for (var i = 100; i <= 200; i++) {
  numberArray.push(i);
}

function fizzbuzz (numberArray) {

  for (var i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] % 3 === 0 && numberArray[i] % 4 === 0) {
      numberArray[i] = "LoopyLighthouse";
    }
    if (numberArray[i] % 3 === 0) {
      numberArray[i] = "Loopy";
    }
    if (numberArray[i] % 4 === 0) {
      numberArray[i] = "Lighthouse";
    }

  }
  return numberArray
}

fizzbuzz(numberArray)

for (var i1 = 0; i1 < numberArray.length; i1++) {
  console.log(numberArray[i1]);
}
