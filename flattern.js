const array = [ 1,2,3,[4,5,[6,7,8], 9], [10,11], [12, 13, [14,15, [16, 17]]]];

const flattern = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flattern(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};
console.log(flattern(array));
