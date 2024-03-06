// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/FindMax-Solution#index.js

// Solution 👉 https://www.loom.com/share/cc0efcb5211b48dcb23637b6dae4c56f

// Write a function that takes in an array of numbers and returns the largest number

function findMax (array) {
  let  result = [array[0]]
    array.forEach(value =>{
      if(value > result){
        result = value
      }
    })
  return {result}
}
// console.log(findMax([2,7,4,5,4,5,6,7,8,,9,0,7,4,3,5]))
//Topics: loops, arrays, conditions,