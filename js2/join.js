function join(arr) {
    if (arr.length === 0) {
      return "";
    }
  
    let result = String(arr[0]);
  
    for (let i = 1; i < arr.length; i++) {
      result += " " + String(arr[i]);
    }
  
    return result;
  }

  
const arr = ["Hola", "mundo", "JavaScript"];
const result = join(arr);
console.log(result); // "Hola mundo JavaScript"