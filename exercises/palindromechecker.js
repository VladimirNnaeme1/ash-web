// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/PalindromChecker-Solution#index.js

// Solution 👉 https://www.loom.com/share/2dd2d840dc5f4576a369524bdc3e8336


// Write a function that takes in string and checks if it is a Palindrome
// A palindrome is a word that is the same forwards and backwards!
// Ex: racecar -> racecar

function isPalindrome (string) {
  // Should return true IF it's a palindrome
  let result;
  let stringArray = string.split('')
  let lastLetter = stringArray.length
  for(let i = 1; i < stringArray.length ; i++ ){
    let value = stringArray[i]
    console.log(value)
   
  }
   // console.log(stringArray[lastLetter-1] == stringArray[0] && stringArray[lastLetter-2] == stringArray[1])

  
}

// console.log(isPalindrome('ruergrrur'))

//Topics: Strings, loops
// let sent  ='racecar'
// console.log(sent.split(''))