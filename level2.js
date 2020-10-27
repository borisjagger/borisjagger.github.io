var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

//images
var bg = new Image();
var wizard = new Image();
var goblin = new Image();
var ogre = new Image();
var ogreA = new Image();
var ogreB = new Image();
var boss = new Image();
var heartA = new Image();
var heartB = new Image();
var heartC = new Image();
var fireball = new Image();
var gameover = new Image();
var victory = new Image();
var bossHeartA = new Image();
var bossHeartB = new Image();
var bossHeartC = new Image();
var bossHeartD = new Image();
var potionHealth = new Image();
var potionMana = new Image();
var potionDeath = new Image();
var healthPlus = new Image();
var healthMinus = new Image();
var manaPlus = new Image();
var barrelA = new Image();
var barrelB = new Image();
var barrelC = new Image();
var barrelD = new Image();
var barrelE = new Image();
var barrelF = new Image();
var barrelG = new Image();
var barrelH = new Image();
var barrelBrokenA = new Image();

//Sounds
var ambienceSound = new Audio();
var fireballSound = new Audio();
var enemyDies = new Audio();
var winSound = new Audio();
var defeatSound = new Audio();
var barrelCrushesSound = new Audio();
var collect = new Audio();
var heroMinusLife = new Audio();
var enemyAppearSound = new Audio();
var bossSound = new Audio();

//images
bg.src = "img/bg2.png";
wizard.src = 'img/wizard.png';
goblin.src = 'img/mummy.png';
ogre.src = 'img/mummy.png';
ogreA.src = 'img/mummy.png';
ogreB.src = 'img/mummy.png';
boss.src = 'img/dragon.png';
heartA.src = 'img/heartA.png';
heartB.src = 'img/heartB.png';
heartC.src = 'img/heartC.png';
fireball.src = 'img/fireballpng.png';
gameover.src = 'img/gameover.png';
victory.src = 'img/victory.png';
bossHeartA.src = 'img/bosshealth1.png';
bossHeartB.src = 'img/bosshealth2.png';
bossHeartC.src = 'img/bosshealth3.png';
bossHeartD.src = 'img/bosshealth4.png';
potionHealth.src = 'img/potion.png';
potionMana.src = 'img/potion_mana.png';
potionDeath.src = 'img/potion_death.png';
healthPlus.src = 'img/health_plus.png';
healthMinus.src = 'img/health_minus.png';
manaPlus.src = 'img/mana_plus.png';
barrelA.src = 'img/sarcophagus.png';
barrelB.src = 'img/sarcophagus.png';
barrelC.src = 'img/sarcophagus.png';
barrelD.src = 'img/sarcophagus.png';
barrelE.src = 'img/sarcophagus.png';
barrelF.src = 'img/sarcophagus.png';
barrelG.src = 'img/sarcophagus.png';
barrelH.src = 'img/sarcophagus.png';
barrelBrokenA.src = 'img/brokenbarrel.png';

//Sounds
ambienceSound.src = 'sound/egypt.mp3';
fireballSound.src = 'sound/fireball_start.wav';
enemyDies.src = 'sound/enemy_dies.wav';
winSound.src = 'sound/win.wav';
defeatSound.src = 'sound/defeat.wav';
barrelCrushesSound.src = 'sound/barrel_crushes.wav';
collect.src = 'sound/collect.wav';
heroMinusLife.src = 'sound/hero_minus_life.mp3';
enemyAppearSound.src = 'sound/enemy_move.wav';
bossSound.src = 'sound/boss.wav';

//Расположение объектов
var gap = 10;
var shot = 17;
var speed = 12000;

var xPos = 20;
var yPos = 170;
var grav = 10;
var minus = 0;
var xFire = 20;
var yFire = 170;
var yLifeA = 10;
var yLifeB = 10;
var yLifeC = 10;
var yGameOver = 600;
var yVictory = 600;
let score = 0;
let health = 3;
let bossHealth = 3;
let xOgre = 1000;
let yOgre = 300;
let xOgreA = 800;
let yOgreA = 200;
let xOgreB = 900;
let yOgreB = 50;
let xGoblin = 850;
let yGoblin = 600;
let xBoss = 2900;
let yBoss = 50;
let xBg = 0;
let yBg = 0;
let xBossHeartA = 450;
let yBossHeartA = 700;
let xBossHeartB = 450;
let yBossHeartB = 700;
let xBossHeartC = 450;
let yBossHeartC = 700;
let xBossHeartD = 450;
let yBossHeartD = 700;
let xPotionHealth = 1050;
let yPotionHealth = 600;
let xPotionMana = 450;
let yPotionMana = 600;
let xPotionDeath = 650;
let yPotionDeath = 600;
let xHealthPlus = 0;
let yHealthPlus = 700;
let xHealthMinus = 0;
let yHealthMinus = 700;
let xManaPlus = 0;
let yManaPlus = 700;
let xBarrelA = 450;
let yBarrelA = 200;
let xBarrelB = 650;
let yBarrelB = 300;
let xBarrelC = 1050;
let yBarrelC = 180;
let xBarrelD = 850;
let yBarrelD = 100;
let xBarrelE = 1400;
let yBarrelE = 320;
let xBarrelF = 1650;
let yBarrelF = 150;
let xBarrelG = 1800;
let yBarrelG = 90;
let xBarrelH = 2100;
let yBarrelH = 250;
let xBarrelBrokenA = 150;
let yBarrelBrokenA = 200;

document.addEventListener('keydown', move);
function move() {
	ambienceSound.play();
	if (event.code == 'ArrowRight' && xPos <= 300) {
	xFire = xPos += 20;
	yHealthPlus = 700;
	yHealthMinus = 700;
	yManaPlus = 700;
	 moveBg();
	} else if (event.code == 'ArrowRight' && xPos > 300) {
	xFire = xPos -= 0;
	yHealthPlus = 700;
	yHealthMinus = 700;
	yManaPlus = 700;
	 moveBg();
	} else if (event.code == 'ArrowUp' && yPos >= 12) {
	yFire = yPos -= 20;
	} else if (event.code == 'ArrowDown' && yPos <= 340) {
	yFire = yPos += 20;
	} else if (event.code == 'Space' && xFire >= xPos) {
		fireballStart();
		xFire = xPos + 10;
		shot -= 1;
	} else if (event.code == 'ArrowLeft' && xPos > 0) {
	xFire = xPos -= 20;	
	}
};

function fireballStart() {
	requestAnimationFrame(fireballStart);
	if (xFire <= xPos + 400 && xFire > xPos && shot > 0) {
			xFire += grav / minus;
			document.querySelector('.ammo').textContent = shot - 1;
			fireballSound.play();
		} else if (xFire >= xPos + 400) {
			xFire = xPos;
			minus += 0.4;
}};

function enemyMove() {
	 context.drawImage(ogre, xOgre, yOgre);
	 context.drawImage(ogreA, xOgreA, yOgreA);
	 context.drawImage(ogreB, xOgreB, yOgreB);
	 context.drawImage(goblin, xGoblin, yGoblin);
	 context.drawImage(boss, xBoss, yBoss);
	 context.drawImage(bossHeartA, xBossHeartA, yBossHeartA);
context.drawImage(bossHeartB, xBossHeartB, yBossHeartB);
context.drawImage(bossHeartC, xBossHeartC, yBossHeartC);
context.drawImage(bossHeartD, xBossHeartD, yBossHeartD);
enemyAppear();
	 requestAnimationFrame(enemyMove);
	if (xOgre - xPos <= 500 && xOgre >= xPos && yOgre == yPos) {
	xOgre -= (xOgre - xPos)/speed
	} else if (xOgre - xPos <= 700  && xOgre >= xPos && yOgre > yPos && yOgre < 600) {
	yOgre -= (yOgre - yPos)/speed	
	xOgre -= (xOgre - xPos)/speed
	} else if (xOgre - xPos <= 700  && xOgre >= xPos && yOgre < yPos) {
	yOgre -= (yOgre - yPos)/speed	
	xOgre -= (xOgre - xPos)/speed
	} 
	if (xGoblin - xPos <= 500  && xGoblin >= xPos && yGoblin == yPos) {
	xGoblin -= (xGoblin - xPos)/speed
	} else if (xGoblin - xPos <= 700 && xGoblin >= xPos && yGoblin > yPos && yGoblin < 600) {
	yGoblin -= (yGoblin - yPos)/speed	
	xGoblin -= (xGoblin - xPos)/speed
	} else if (xGoblin - xPos <= 700  && xGoblin >= xPos && yGoblin < yPos) {
	yGoblin -= (yGoblin - yPos)/speed	
	xGoblin -= (xGoblin - xPos)/speed
	} 
	if (xOgreA - xPos <= 500  && xOgreA >= xPos && yOgreA == yPos) {
	xOgreA -= (xOgreA - xPos)/speed
	} else if (xOgreA - xPos <= 700 && xOgreA >= xPos && yOgreA > yPos && yOgreA < 600) {
	yOgreA -= (yOgreA - yPos)/speed	
	xOgreA -= (xOgreA - xPos)/speed
	} else if (xOgreA - xPos <= 700 && xOgreA >= xPos && yOgreA < yPos) {
	yOgreA -= (yOgreA - yPos)/speed
	xOgreA -= (xOgreA - xPos)/speed
	} 
    if (xOgreB - xPos <= 500  && xOgreB >= xPos && yOgreB == yPos) {
	xOgreB -= (xOgreB - xPos)/speed
	} else if (xOgreB - xPos <= 700  && xOgreB >= xPos && yOgreB > yPos && yOgreB < 600) {
	yOgreB -= (yOgreB - yPos)/speed	
	xOgreB -= (xOgreB - xPos)/speed
	} else if (xOgreB - xPos <= 700  && xOgreB >= xPos && yOgreB < yPos) {
	yOgreB -= (yOgreB - yPos)/speed
	xOgreB -= (xOgreB - xPos)/speed
	} 
if (xBoss - xPos <= 500  && xBoss >= xPos && yBoss == yPos) {
	xBoss -= (xBoss - xPos)/(speed + 4000);
	yBossHeartA = 350;
	} else if (xBoss - xPos <= 700 && xBoss >= xPos && yBoss > yPos && yBoss < 600) {
	yBoss -= (yBoss - yPos)/(speed + 4000);	
	xBoss -= (xBoss - xPos)/(speed + 4000);
	yBossHeartA = 350;
	} else if (xBoss - xPos <= 700  && xBoss >= xPos && yBoss < yPos) {
	yBoss -= (yBoss - yPos)/(speed + 4000);	
	xBoss -= (xBoss - xPos)/(speed + 4000);
	yBossHeartA = 350;
	}

}

function enemyAppear() {
	if ((xOgre - xPos <= 600 && yOgre != 600) || (xGoblin - xPos <= 600 && yGoblin != 600) || (xOgreA - xPos <= 600 && yOgreA != 600) || (xOgreB - xPos <= 600 && yOgreB != 600)) {
	enemyAppearSound.play();
}   else if (xBoss - xPos <= 600 && yBoss != 1000) {
	bossSound.play();
}}

 function moveBg() {
 if (xPos >= 100 && xBg >= - 1900) {
	xBg -= 20; 
	xBarrelA -= 20;
	xBarrelB -= 20;
	xBarrelC -= 20;
	xBarrelD -= 20;
	xBarrelE -= 20;
	xBarrelF -= 20;
	xBarrelG -= 20;
	xBarrelH -= 20;
	xPotionHealth -= 20;
	xPotionMana -= 20;
	xPotionDeath -= 20;
	xGoblin -= 20;
	xBoss -= 20;
 } 
 }
 
function scoreAdd() {
	score += 100;
	document.querySelector('.score').textContent = score;
}

function win() { if (yBoss == 1000) {
winSound.play();
yVictory = 100;
yPos = -200;
yFire = -200;
document.querySelector('.nextlevelSrc').href = 'start.html';
}
}

//Проверка здоровья героя
function healthCheck() { if (health <= 0) {
 defeatSound.play();
 yPos = 600;
 yFire = 600;
 yGameOver = 50;
 yLifeA = 600;
 xFire = 1000;
 yFire = 1000;
 } else if (health == 2) {
 heroMinusLife.play();
 yLifeC = 600;	
 xPos = 20;
 yPos = 170; 
 xFire = 30;
 yFire = 170;
 health = 2;
 xHealthMinus = xPos;
 yHealthMinus = yPos - 40;
 } else if (health == 1) {
 heroMinusLife.play();
 yLifeB = 600;	
 xPos = 20;
 yPos = 170; 
 xFire = 30;
 yFire = 170;
 health = 1;
 xHealthMinus = xPos;
 yHealthMinus = yPos - 40;
 }
}

function healthAdd () {
	if (health == 1) {
		health += 1;
		yLifeB = 10;
		yHealthPlus = yPos - 40;
		xHealthPlus = xPos;
	} else if (health == 2) {
		health += 1;
		yLifeC = 10;
		yHealthPlus = yPos - 40;
		xHealthPlus = xPos;
	} else if (health == 3) {
		health = 3;
		yHealthPlus = yPos - 40;
		xHealthPlus = xPos;
	}
}

//Проверка здоровья босса
function bossHealthCheck() { if (bossHealth <= 0) {
 yBoss = 1000;
 yBossHeartD = 350;
 enemyDies.play();
 } else if (bossHealth == 2) {
 bossHealth = 2;
 yBossHeartB = 350;
 } else if (bossHealth == 1) {
 bossHealth = 1;
 yBossHeartC = 350;
 }
}

function touchControl() {
	if(xPos + wizard.width >= xOgre && yPos + wizard.height >= yOgre && yPos <= yOgre  + ogre.height && xPos <= xOgre + ogre.width
 ) {
 health = health - 1;
 yOgre = 600;
 healthCheck();
 } else if (xPos + wizard.width >= xGoblin && yPos + wizard.height >= yGoblin && yPos <= yGoblin  + goblin.height && xPos <= xGoblin + goblin.width
 ) {
 health = health - 1;
 yGoblin = 600;
 healthCheck();
 } else if(xPos + wizard.width >= xOgreA && yPos + wizard.height >= yOgreA && yPos <= yOgreA  + ogreA.height && xPos <= xOgreA + ogreA.width
 ) {
 health = health - 1;
 yOgreA = 600;
 healthCheck();
 } else if(xPos + wizard.width >= xOgreB && yPos + wizard.height >= yOgreB && yPos <= yOgreB  + ogreB.height && xPos <= xOgreB + ogreB.width
 ) {
 health = health - 1;
 yOgreB = 600;
 healthCheck();
 } else if (xPos + wizard.width >= xBoss && yPos + wizard.height >= yBoss && yPos <= yBoss  + boss.height && xPos <= xBoss + boss.width
 ) {
 health = health - 1;
 healthCheck();
 } else if (xPos <= xPotionHealth + potionHealth.width && xPos >= xPotionHealth && yPos + wizard.height >= yPotionHealth && yPos <= yPotionHealth  + potionHealth.height
 ) {
 collect.play();
 healthAdd();
 yPotionHealth = 600;
 } else if (xPos <= xPotionMana + potionMana.width && xPos >= xPotionMana && yPos + wizard.height >= yPotionMana && yPos <= yPotionMana  + potionMana.height
 ) {
 collect.play();
 yManaPlus = yPos - 40;
 xManaPlus = xPos;
 shot += 15;
 yPotionMana = 600;
 document.querySelector('.ammo').textContent = shot;
 } else if (xPos <= xPotionDeath + potionDeath.width && xPos >= xPotionDeath && yPos + wizard.height >= yPotionDeath && yPos <= yPotionDeath  + potionDeath.height
 ) {
 collect.play();
 health -= 1;
 healthCheck();
 yPotionDeath = 600;
 }  
}

function draw() {
context.drawImage(bg, xBg, yBg);
 
// Отслеживание прикосновений
 touchControl();

// Отслеживание попаданий фаерболла
 if(xFire + fireball.width >= xOgre
 && xFire < xOgre 
 && yFire + fireball.height >= yOgre && yFire <= yOgre + ogre.width && yOgre <= 599
 ) {
 yOgre = 600;
 scoreAdd();
 win();
 enemyDies.play();
 } else if(xFire + fireball.width >= xGoblin
 && xFire < xGoblin 
 && yFire + fireball.height >= yGoblin && yFire <= yGoblin + goblin.width && yGoblin <= 599
 ) {
 yGoblin = 600;
 scoreAdd();
 win();
 enemyDies.play();
 } else if(xFire + fireball.width >= xOgreA
 && xFire < xOgreA 
 && yFire + fireball.height >= yOgreA && yFire <= yOgreA + ogreA.width && yOgreA <= 599
 ) {
 yOgreA = 600;
 scoreAdd();
 win();
 enemyDies.play();
 } else if(xFire + fireball.width >= xOgreB
 && xFire < xOgreB 
 && yFire + fireball.height >= yOgreB && yFire <= yOgreB + ogreB.width && yOgreB <= 599
 ) {
 yOgreB = 600;
 scoreAdd();
 win();
 enemyDies.play();
 } else if(xFire + fireball.width >= xBoss
 && xFire < xBoss
 && yFire + fireball.height >= yBoss && yFire <= yBoss + boss.width && yBoss <= 599
 ) {
 bossHealth = bossHealth - 1;
 bossHealthCheck();
 scoreAdd();
 win();
 }	else if(xFire + fireball.width >= xBarrelA
 && xFire < xBarrelA
 && yFire + fireball.height >= yBarrelA && yFire <= yBarrelA + barrelA.width && yBarrelA <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelA = 600;
 yPotionMana = 200;
 }	else if(xFire + fireball.width >= xBarrelB
 && xFire < xBarrelB
 && yFire + fireball.height >= yBarrelB && yFire <= yBarrelB + barrelB.width && yBarrelB <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelB = 600;
 yPotionDeath = 300;
 }	else if(xFire + fireball.width >= xBarrelC
 && xFire < xBarrelC
 && yFire + fireball.height >= yBarrelC && yFire <= yBarrelC + barrelC.width && yBarrelC <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelC = 600;
 yPotionHealth = 180;
 }	else if(xFire + fireball.width >= xBarrelD
 && xFire < xBarrelD
 && yFire + fireball.height >= yBarrelD && yFire <= yBarrelD + barrelD.width && yBarrelD <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelD = 600;
 yGoblin = 100;
 }	else if(xFire + fireball.width >= xBarrelE
 && xFire < xBarrelE
 && yFire + fireball.height >= yBarrelE && yFire <= yBarrelE + barrelE.width && yBarrelE <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelE = 600;
yPotionDeath = 300;
 xOgre = 1000;
 yOgre = 300;
 xOgreA = 800;
 yOgreA = 200;
 xOgreB = 900;
 yOgreB = 50;
 }	else if(xFire + fireball.width >= xBarrelF
 && xFire < xBarrelF
 && yFire + fireball.height >= yBarrelF && yFire <= yBarrelF + barrelF.width && yBarrelF <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelF = 600;
 xGoblin = xBarrelF;
 yGoblin = 100;
 }	else if(xFire + fireball.width >= xBarrelG
 && xFire < xBarrelG
 && yFire + fireball.height >= yBarrelG && yFire <= yBarrelG + barrelG.width && yBarrelG <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelG = 600;
 xGoblin = xBarrelG;
 yPotionHealth = 90;
 xPotionHealth = xBarrelG;
  xOgre = 1000;
 yOgre = 300;
 xOgreA = 800;
 yOgreA = 200;
 xOgreB = 900;
 yOgreB = 50;
 }		else if(xFire + fireball.width >= xBarrelH
 && xFire < xBarrelH
 && yFire + fireball.height >= yBarrelH && yFire <= yBarrelH + barrelH.width && yBarrelH <= 599
 ) {
 barrelCrushesSound.play();
 yBarrelH = 600;
 xGoblin = xBarrelH;
 yPotionMana = 250;
 xPotionMana = xBarrelH;
 }	



enemyMove();
context.drawImage(heartA, 650, yLifeA);
context.drawImage(heartB, 580, yLifeB);
context.drawImage(heartC, 510, yLifeC);
context.drawImage(potionHealth, xPotionHealth, yPotionHealth);
context.drawImage(potionMana, xPotionMana, yPotionMana);
context.drawImage(potionDeath, xPotionDeath, yPotionDeath);
context.drawImage(barrelA, xBarrelA, yBarrelA);
context.drawImage(barrelB, xBarrelB, yBarrelB);
context.drawImage(barrelC, xBarrelC, yBarrelC);
context.drawImage(barrelD, xBarrelD, yBarrelD);
context.drawImage(barrelE, xBarrelE, yBarrelE);
context.drawImage(barrelF, xBarrelF, yBarrelF);
context.drawImage(barrelG, xBarrelG, yBarrelG);
context.drawImage(barrelH, xBarrelH, yBarrelH);
context.drawImage(healthPlus, xHealthPlus, yHealthPlus);
context.drawImage(healthMinus, xHealthMinus, yHealthMinus);
context.drawImage(manaPlus, xManaPlus, yManaPlus);
//context.drawImage(barrelBrokenA, xBarrelBrokenA, yBarrelBrokenA);
context.drawImage(wizard, xPos, yPos);
context.drawImage(fireball, xFire, yFire);
context.drawImage(gameover, 50, yGameOver);
context.drawImage(victory, 150, yVictory);
requestAnimationFrame(draw);
}
wizard.onload = draw;

