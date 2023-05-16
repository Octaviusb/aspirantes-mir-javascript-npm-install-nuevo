// escribe la función maxIndex acá
function max(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
}
