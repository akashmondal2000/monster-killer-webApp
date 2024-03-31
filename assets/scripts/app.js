const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife)

function endRound (){
    const initialPlayerHelth = currentPlayerHealth;
    const playerDemege = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDemege;

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initialPlayerHelth;
        setPlayerHealth(initialPlayerHelth)
        alert("you would be dead but bonus life saved you")
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("You Won!")
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert("You Lost!")
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ){
        alert("You draw this game")
    }

}


function attactMonster (mode){
    let maxDamege ;
    if (mode === 'ATTACK'){
        maxDamege = ATTACK_VALUE
    }else if (mode === 'STRONG_ATTACK'){
        maxDamege = STRONG_ATTACK_VALUE
    }

    const damage = dealMonsterDamage(maxDamege);
    currentMonsterHealth -= damage; // currentMonsterHealth = currentMonsterHealth - damage //both are same -> 1st one is short hand//
    
    endRound()
}

function attackHandler(){
    attactMonster("ATTACK")
}

function strongAttackHandler (){
    attactMonster("STRONG_ATTACK")
}

function healPlayerHandler () {
    let healValue ;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert(`you can't heal to more then your max initial health`)
    }else{
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue; 
    endRound();
}

attackBtn.addEventListener('click',attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)
healBtn.addEventListener('click',healPlayerHandler)