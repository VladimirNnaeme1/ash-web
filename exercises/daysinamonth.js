// Test you code by forking this repl: 
// 👉 COMMING SOON!

// Create a function that takes the month and year (as integers)
// and returns the number of DAYS in that month

// Hints:
// Don't forget about leap year!
// Keep in mind which month has 30 days, 31 days, and 28 days
// Use everything you learned to get to the answer

const daysInMonth = (month,year) => {
  let days = []
if(month == 2){
  if ( year % 4 == 0){
    days.push(29) 
  }
  else{
    days.push(28)
  }
}
 else if(month == 4 || month == 6 || month == 9){
  if(year % 4 == 0){
    days.push(30)
  }
  else{days.push(30)}
 
  
}
else if(! month == 4 || month == 6 || month == 9){
  if(year % 4 == 0){
    days.push(31)
  }
  else{
    days.push(31)
  }
  
 }
  
  
   return days
}
// console.log(daysInMonth(2,2020))

// Example:
// daysInMonth(2,2018) -> 28
// days(4,654) -> 30
// days(2,2020) -> 29