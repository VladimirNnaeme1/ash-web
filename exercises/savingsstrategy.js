// Test you code by forking this repl: 
// 👉 COMMING SOON!


// The 50-30-20 strategy is a simple way to budget
// which involves spending 50% of after-tax income on needs,
// 30% after tax income on wants,
// 20% after-tax income on savings or paying off debt.

// Create a function that takes an income amount and return an OBJECT with what they have for needs, wants, and savings

function savingsStrategy (income) {
  let outPut = {}
  let needs = income * 0.5
  let wants = income * 0.3
  let savings = income * 0.2
  outPut['Needs'] = needs;
  outPut['Wants'] = wants
  outPut['Savings'] = savings

  return outPut
}
// console.log(savingsStrategy(3300))
// Ex:
// Input: fiftyThirtyTwenty(10000)
// Output: { "Needs": 5000, "Wants": 3000, "Savings": 2000 }


//Topics: Objects

// console.log(`time 10:40,
// 42%`)