const ATTACT_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife)

function attackHandler(){
    
    const damage = dealMonsterDamage(ATTACT_VALUE);
    currentMonsterHealth -= damage; // currentMonsterHealth = currentMonsterHealth - damage //both are same -> 1st one is short hand//
}

attackBtn.addEventListener('click',attackHandler)