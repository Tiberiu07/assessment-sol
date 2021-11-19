// SOLUTION EXPLNANATION
// A simple Backtracking solution where we choose next Element
// By considering all possible lengths
// For example if we have "123" we have to consider "1", "12" and "123" as current element
// And after we go on in a recursive manner
// If we have chosen "1", now we can chose "2" or "23" as next element
// Base Case -> When we traversed all the string -> check if the formed sequence is valid
// (and no elements in the array start with 0)

function isValid(stringArr) {
  if (stringArr.length < 3) {
    return false;
  } else {
    for (let i = 2; i < stringArr.length; i++) {
      if (
        parseInt(stringArr[i]) !==
        parseInt(stringArr[i - 1]) + parseInt(stringArr[i - 2])
      ) {
        return false;
      }
    }
    return true;
  }
}

function noStartingZeros(numArray) {
  for (let element of numArray) {
    if (element[0] === "0") {
      return false;
    }
  }
  return true;
}

var flag = false;
function isAdditiveNumberRecursive(num, startIndex, currentNumArrray = []) {
  if (startIndex >= num.length) {
    if (isValid(currentNumArrray) && noStartingZeros(currentNumArrray)) {
      flag = true;
    }
  }
  for (let length = 1; length <= num.length - startIndex; length++) {
    let str = num.substr(startIndex, length);
    currentNumArrray.push(str);
    isAdditiveNumberRecursive(num, startIndex + str.length, [
      ...currentNumArrray,
    ]);
    currentNumArrray.pop();
  }
}

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  if (num.length < 3) {
    return false;
  }
  isAdditiveNumberRecursive(num, 0);
  return flag;
};

console.log(isAdditiveNumber("24610162642"));
