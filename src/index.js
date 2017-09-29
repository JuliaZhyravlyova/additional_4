module.exports = function multiply(first, second) {
  // your solution
  
  
  
      

  const shortNumsResults = first.split('').reverse().map(
    (firstValue) => second.split('').reverse().map((secondValue) => firstValue * secondValue)
  );

  
  const flatResults = shortNumsResults.reduce((acc, arr, startPosition) => {
    arr.map((value, index) => {
      const radix = index + startPosition;
      acc[radix] = (acc[radix] || 0) + value;
    })
    return acc;
  }, [])


  while(!!flatResults.find((number) => number > 9)) {
    flatResults.map((number, index) => {
      if (number > 9) {
        flatResults[index] = number % 10;
        flatResults[index + 1] = (flatResults[index + 1] || 0) + Math.floor(number / 10);
      }
    })
  }

  return flatResults.reverse().join('');
}
