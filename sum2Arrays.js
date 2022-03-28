function arrayPlusArray(arr1, arr2) {
  let twoArray = arr1.concat(arr2)
  let sum = twoArray.reduce((a,b) => (a + b))
  return sum
};
