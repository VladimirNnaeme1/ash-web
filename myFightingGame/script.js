let qButton = document.getElementById('qAttack')
qButton.addEventListener('click',()=>{
  
})

let aButton = document.getElementById('aHeal')
aButton.addEventListener('click',()=>{
  let live = Number(vladHealth.innerText)
  console.log(typeof live) 
  
  
  // vladHealth.innerHTML = live + 10

})

let pButton = document.getElementById('pAttack')

let lButton = document.getElementById('lHeal')
lButton.addEventListener('click',()=>{
  
})

let vladHealth = document.getElementById('vladHealth')

let clintHealth = document.getElementById('clintHealth')





 let result;

  class vlad{
    constructor(){
      this.health = 100
    }
    punch(deduct){
      if(this.health <= 0){
        // document.getElementById('declareWinner')
        // .innerText = 'CLINT win!'
        result = 'Clint win!'
        return result
      }
      this.health -= deduct

      // let live = Number(vladHealth.innerText)
   
      
      
    }
    heal(add){
      if(this.health + add >= 100){ 
        return 
      }
      else{
        this.health += add
      }
      
      // let live =  Number(vladHealth.innerText)
     
    }
    updateHealth (){
      vladHealth.innerHTML = this.health
    }
  }
  
  let player1 = new vlad()

      pButton.addEventListener('click',()=>{
          let randomValue = Math.ceil(Math.random() * 10)
          player1.punch(randomValue)
          player1.updateHealth()


      }
      )

      aButton.addEventListener('click',()=>{
          let randomValue = Math.ceil(Math.random() * 10)
          player1.heal(randomValue)
          player1.updateHealth()
      }
      )

      
      
  class clint{
    constructor(){
      this.health = 100
    }
    punch2(deduct){
      if(this.health <= 0){
        // document.getElementById('declareWinner')
        // .innerText = 'CLINT win!'
        result = 'Vlad wins!'
        return result
      }
      this.health -= deduct
      let live = Number(vladHealth.innerText)
    
      clintHealth.innerHTML = this.health
      
    }
    heal2(add){
      if(this.health + add >= 100){ 
        return 
      }
      else{
        this.health += add
      }
      let live =  Number(vladHealth.innerText)
      clintHealth.innerHTML = this.health
    }
  }
      let player2 = new clint()

      qButton.addEventListener('click',()=>{
          let randomValue = Math.ceil(Math.random() * 10)
          player2.punch2(randomValue)


      }
      
      )
      lButton.addEventListener('click',()=>{
          let randomValue = Math.ceil(Math.random() * 10)
          player2.heal2(randomValue)
      })

    // return result

