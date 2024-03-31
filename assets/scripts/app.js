const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK =  "ATTACK" // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK" // MODE_STRONG_ATTACK = 1

const enteredInput = prompt("Enter maximum life for you and monster.,'100' ");

let chosenMaxLife = parseInt(enteredInput);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHelth = currentPlayerHealth;
  const playerDemege = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDemege;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHelth;
    setPlayerHealth(initialPlayerHelth);
    alert("you would be dead but bonus life saved you");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You Lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You draw this game");
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attactMonster(mode) {
  let maxDamege;
  if (mode === MODE_ATTACK) {
    maxDamege = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamege = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamege);
  currentMonsterHealth -= damage; // currentMonsterHealth = currentMonsterHealth - damage //both are same -> 1st one is short hand//

  endRound();
}

function attackHandler() {
  attactMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attactMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert(`you can't heal to more then your max initial health`);
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
