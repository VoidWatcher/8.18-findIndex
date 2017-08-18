function findIndex (arr, item) {
  let indexArr = [];
  arr.forEach(function(element, index, arr) {
    if (element == item) {
      indexArr.push(index);
    }
  }, this);
  return indexArr;
}

console.log(findIndex([1, 2, 3, 1, 4], 1));