const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;



let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife)


function attactMonster (mode){
    let maxDamege ;
    if (mode === 'ATTACK'){
        maxDamege = ATTACK_VALUE
    }else if (mode === 'STRONG_ATTACK'){
        maxDamege = STRONG_ATTACK_VALUE
    }

    const damage = dealMonsterDamage(maxDamege);
    currentMonsterHealth -= damage; // currentMonsterHealth = currentMonsterHealth - damage //both are same -> 1st one is short hand//
    
    const playerDemege = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDemege;

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You Won!")
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert("You Lost!")
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ){
        alert("You draw this game")
    }
}

function attackHandler(){
    attactMonster("ATTACK")

}

function strongAttackHandler (){
    attactMonster("STRONG_ATTACK")
}

attackBtn.addEventListener('click',attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)