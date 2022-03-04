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
