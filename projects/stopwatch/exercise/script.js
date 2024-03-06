

// let seconds = document.getElementById('seconds')
// let minutes = document.getElementById('tens')

// let second = Number (seconds.innerHTML)
// let minute = Number(minutes.innerHTML)
function stopwatch(){
  if(!isCounting){
     intervalId =  setInterval(()=>{
  if (secs >= 0){
    secs += 1
    document.getElementById('seconds')
    .innerHTML = secs

    if (secs == 99){
      
      tens += 1
      document.getElementById('tens')
      .innerHTML = tens
      secs = 0
    }

  }
  },10)
  }
  
}
function stopTimer  (){
  
  clearInterval(intervalId)
  isCounting = false

}

function resetTimer (){
  isCounting = false
  if (secs >= 0){
    secs = 0
    document.getElementById('seconds')
    .innerHTML = '00'

    if (secs == 0){
      
      tens = 0
      document.getElementById('tens')
      .innerHTML = '00'
      secs = 0
    }

  }
}
document.getElementById('button-stop')
.addEventListener('click',()=>{
  stopTimer()
})
document.getElementById('button-start')
.addEventListener('click',()=>{
  stopwatch()
})
document.getElementById('button-reset')
.addEventListener('click',()=>{
  resetTimer()
})





  /**
   * Initiate 3 variables (seconds, tens, interval)
   * Give a starting value of 0 for seconds and tens
   * Use the appropriate variable type for each
   */
  let tens = 0 
  let secs = 0
  let intervalId;
  let isCounting = false
  /**
   * Get the DOM elements for the stopwatch and save them in variables
   * Use the appropriate variable type for each
    let buttonS
   * Hint: There are 3 buttons and 2 numbers to manipulate
   */
  let buttonStart = document.getElementById('button-start')
  let buttonStop = document.getElementById('button-stop')
  let buttonReset = document.getElementById('button-reset')

  /**
   * Create a function, which is waiting for the user to press the 'Start' button.
   * When pressed, set the timer run `runStopwatch` function every 10ms.
   */
  
  buttonStart.onclick = () => {}

  // /**
  //  * Create a function, which is waiting for the user to press the 'Stop' button.
  //  * When pressed, clear the interval.
  //  */
  buttonStop.onclick = () => {}

   /**
  //  * Create a function, which is waiting for the user to press the 'Reset' button.
  //  * When pressed, clear the interval, reset the seconds and tens to 0.
  //  *
  //  * Hint: Don't forget to concatenate a leading '0'.
  //  */
   buttonReset.onclick = () => {}

  // /**
  //  * Build the `runStopwatch` function.
  //  */
   const runStopwatch = () => {
    // Increment the tens.
    console.log(tens++)
    /**
     * Display updated tens and seconds.
     * Make sure, that the tens and seconds are always two digits long.
     *
     * 
     * Hint: there are 4 cases you need to handle every time the function runs.
     */

  }
  runStopwatch()
  runStopwatch()
  runStopwatch()
  runStopwatch()

