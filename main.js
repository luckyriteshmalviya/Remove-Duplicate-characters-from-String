// Remove Duplicate characters from String

// Sample case 1) let a = "aabcccddegjj"     // a = "abcdegj"
// Sample case 2) let a = "abcdef"           // a = "abcdef"

/**
 * Step 01 - Check exceptional condition.
 * Step 1.1- If yes then return an message -"Invalid input".
 * Step 02 - Convert string into array
 * Step 03 - Create a loop
 * Step 3.1- Create an another loop which is starting from +1 index of previous loop.
 * Step 04 - Check if any value repeating themfself.
 * Step 4.1- If yes then remove it and push back the iteration by one step.
 * Step 05 - Convert array into string nd remove all the commas.
 */

function removeDuplicateCharacters(input) {
  if (typeof input === typeof "a") {
    let arr = Array.from(input);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j = j - 1;
          continue;
        }
      }
    }
    let res = arr.toString();
    res = res.replaceAll(",", "");
    return res;
  } else {
    return "Invalid Input";
  }
}
let a = "aabcccddegjj";
console.log(removeDuplicateCharacters(a));

//
/**Second Approach */
//
// let a = "aaaabcccd";
// function removeDuplicateCharacters(string) {
//   let result = string
//     .split("")
//     .filter((item, index, arr) => {
//       return arr.indexOf(item) == index;
//     })
//     .join("");
//   return result;
// }
// console.log(removeDuplicateCharacters(a));
