// let numbers = [1,2,3,4]
// let result = 0
// for( number of numbers){
//   result += number
// }
// console.log({result})

// const letterFrequency = (phrase) =>{
//   let result = {}
//   for(const letter of phrase ){
//     if (letter in result){
//       result[letter]++
//     }
//     else{
//       result[letter] =1
//     }
//   }
//   return result
// }
// console.log(letterFrequency('vlad'))

// const wordFrequency = (phrase)=>{
//   let result = {}
//     let words = phrase.split(' ')
//     for(const word of words ){
//       if(word in result){
//         result[word]++
//       }
//       else{
//         result[word] = 1
//       }
//     }


//   return result
// }

// console.log(wordFrequency('hey are you gonna be with me tommorow, cause hey i have really missed you'))

// const filter = (numbers,greaterThan) =>{
//   let result = []
//   for(const number of numbers){
//     if(number > greaterThan){
//       result.push(number)
//     }
//   }
//   return result
// }
// // console.log(filter([2,1,4,3,5,6],2))

// const doubleMap = (numbers) =>{
//   return numbers.map(number => number * 2)
// }
// console.log(doubleMap([2,1,4,3,5,6]))
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => console.log(json))