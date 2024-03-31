const ATTACT_VALUE = 10;
const MONSTER_ATTACT_VALUE = 11;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife)

function attackHandler(){
    
    const damage = dealMonsterDamage(ATTACT_VALUE);
    currentMonsterHealth -= damage; // currentMonsterHealth = currentMonsterHealth - damage //both are same -> 1st one is short hand//
    
    const playerDemege = dealPlayerDamage(MONSTER_ATTACT_VALUE);
    currentPlayerHealth -= playerDemege;

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You Won!")
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert("You Lost!")
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ){
        alert("You draw this game")
    }

}

attackBtn.addEventListener('click',attackHandler)