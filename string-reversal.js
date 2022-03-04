/*
  There are multiple ways to perform string reversal.
  The first way is with built functions.
  The second way is with decrementing for loop
  The third way is by Recursion
*/

/* In the first way, we are going to use String.prototype.split()
   Array.prototype.reverse() and Array.prototype.join()
*/

function reverStringWithBuiltInMethods(str) {
  //this is going to turn the string into an array with each individual character occupying an index
  //for eg. 'hello'.split('') = ['h', 'e', 'l', 'l', 'o']
  const strArray = str.split("");

  //[].reverse() is going to, like the name said 'reverse' the characters in the string.
  //so we would have ['h', 'e', 'l', 'l', 'o'].reverse() to be ['o', 'l', 'l', 'e', 'h']
  const reverseArray = strArray.reverse();

  //[].join('') is going to remove the angular brackets and quotes surrounding the letters and make them a word
  //for eg, ['o', 'l', 'l', 'e', 'h'].join('') = 'olleh' and we are returning that value since we are interested in that
  return reverseArray.join("");
}

/* another way of writing this

 function reverStringWithBuiltInMethods(str) { 
  return str.split('').reverse('').join('');
}

this is called method chaining
*/

//test case with goodbye. expected resutl is eybdoog
console.log(reverStringWithBuiltInMethods("goodbye"));

/* 
  The second way which is a decrementing for loop is going to take the last character of the string
  and store it in a new variable and add on to it the subsequent characters till the word is exhausted.
  this can be achieved by the basic for loop conditional
*/

function reverseStringWithDecrementalForLoop(str) {
  //we have an empty string variable which we would push the reverse characters in.
  let reversedString = "";

  /* 
    here, we are setting the loop counter to the last character of the string ie let i = str.length - 1; 
    -1 because strings are based based index.
    then we start our loop from the lenght of the string down to zero and decrease the value of the counter after each iteration.
  */
  for (let i = str.length - 1; i >= 0; i--) {
    //strings behave like arrays, but they are not arrays. so which such behave we can get the value of a particular index.
    // we are saving that value in the empty declared string reverseString += str[i] is the same as reverseString = reversedString + str[i] (string concatenation)
    //console.log(str[i]) //you can uncomment this to see the value of the char each the loop runs
    reversedString += str[i];
  }

  //this is going to run after the loop condition is over and return the reversed string
  return reversedString;
}

console.log(reverseStringWithDecrementalForLoop("goodbye"));

/* 
  The third is way is by recursion. we 
*/

function reverseStringWithRecursion(str) {
  if (str === "") return "";
  else return reverseStringWithRecursion(str.sub(1)) + str.char(0);
}

console.log(reverseStringWithRecursion("goodbye"));
