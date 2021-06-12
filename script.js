/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 800; // x-positie van speler
var spelerY = 580; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 350;   // x-positie van vijand
var vijandY = 350;   // y-positie van vijand

var fijandX = 500;   // x-positie van vijand 2
var fijandY = 400;   // y-positie van vijand 2

var tijandX = 850;   // x-positie van vijand 3
var tijandY = 200;   // y-positie van vijand 3

var rijandX = 80;   // x-positie van vijand 4
var rijandY = 500;   // y-positie van vijand 4

var sijandX = 80;   // x-positie van vijand 5
var sijandY = 500;   // y-positie van vijand 5

var lijandX = 80;   // x-positie van vijand 5
var lijandY = 500;   // y-positie van vijand 5

var score = 0; // aantal behaalde punten


//var schermscoreX = 400;   // x-positie van score
//var schermscoreY = 400;   // y-positie van score



/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("#e2b0ff"); 
  rect(20, 20, width - 2 * 20, height - 2 * 20);

fill("#8eee7f");
rect(20, 620, 1240, 75);

fill("white");
rect(50, 50, 250, 50);

fill("#9f6060");
rect(20, 640, 1240, 60);
};


//var tekenBeginscherm = function () {
  
 // if (keyIsDown(RIGHT_ARROW))

//};

//width - 2 * 20, height - 2 *20
/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("pink") 
rect(x+15,y+10, 5,5)
};
 
var tekensijand = function(x, y) {
tekensijand = tekenVijand   
}; 

var tekenlijand = function(x, y) {
tekenlijand = tekenVijand   
}; 

var tekenFijand = function(x, y) {
    
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("pink") 
rect(x+15,y+10, 5,5)
};
 

var tekenTijand = function(x, y) {
    
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("pink") 
rect(x+15,y+10, 5,5)
};
 
var tekenRijand = function(x, y) {
    
//rij 1
fill("red")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("pink") 
rect(x+15,y+10, 5,5)
};

 



/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {
fill("yellow");
  ellipse(x+400, y+100, 30, 30);
  fill("yellow")
ellipse(x+400, y+100, 18, 18)
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
 
//rij 1
fill("black")
rect(x,y, 5,5)
rect(x+10,y, 5,5)
rect(x+15,y, 5,5)
rect(x+20,y, 5,5)
rect(x+30,y, 5,5)

//rij 2
rect(x+5,y+5, 5,5)
rect(x+25,y+5, 5,5)
rect(x+15,y+5, 5,5)

//rij 3
rect(x+10,y+10, 5,5)
rect(x+20,y+10, 5,5)

//rij 4
rect(x+10,y+15, 5,5)
rect(x+5,y+15, 5,5)
rect(x+15,y+15, 5,5)
rect(x+20,y+15, 5,5)
rect(x+25,y+15, 5,5)

//rij 5
rect(x,y+20, 5,5)
rect(x+15,y+20, 5,5)
rect(x+30,y+20, 5,5)

//rij 6
rect(x,y+25, 5,5)
rect(x+10,y+25, 5,5)
rect(x+20,y+25, 5,5)
rect(x+30,y+25, 5,5)

//rij 7
rect(x+10,y+30, 5,5)
rect(x+20,y+30, 5,5)

//rij 8
rect(x+10,y+35, 5,5)
rect(x+20,y+35, 5,5)

fill("white")
rect(x+10,y+5, 5,5)
rect(x+20,y+5, 5,5)
  
fill("pink") 
rect(x+15,y+10, 5,5)
};


//startscherm




// beweging 

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {

vijandX = vijandX + random(15) + random(-15)
vijandY = vijandY + random(15) + random(-15)
};    

var beweegFijand = function() {
 
fijandX = fijandX + random(15) + random(-15)
fijandY = fijandY + random(15) + random(-15)
}; 

var beweegTijand = function() {
 
tijandX = tijandX + random(15) + random(-15)
tijandY = tijandY + random(15) + random(-15)
}; 


var beweegRijand = function() {
 
rijandX = rijandX + random(15) + random(-15)
rijandY = rijandY + random(15) + random(-15)
}; 

var beweegSijand = function() {
 
sijandX = sijandX + random(15) 
sijandY = sijandY 
}; 

var beweegLijand = function() {
 
lijandX = lijandX  
lijandY = lijandY + random(15)
}; 
/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};

var checkvijand = function() {
//vijand raakt rand scherm en gaat op nieuwe posities staan
if (vijandX < 21 || vijandY < 21 || vijandX > 1219 || vijandY > 659
  || fijandX < 21 || fijandY < 21 || fijandX > 1219 || fijandY > 659
  || tijandX < 21 || tijandY < 21 || tijandX > 1219 || tijandY > 659
  || rijandX < 21 || rijandY < 21 || rijandX > 1219 || rijandY > 659 ) 
{
 vijandX = random(200,500)
 vijandY = random(200,1100)
 fijandX = random(200,1100)
 fijandY = random(100,550)
 tijandX = random(200,1100)
 tijandY = random(100,550)
 rijandX = random(200,1100)
 rijandY = random(100,550);
 sijandX = random(100,20)
 sijandY = random(50,650);
 lijandX = random(30,600)
 lijandY = random(25,30);
}
  return false;
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

if ( spelerX > 20 && spelerY > 20 && spelerX < 1220 && spelerY < 660)

{

if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 4 ;
}

if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 4;
  }

if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY +4;
  }

if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 4;
  }}
};



/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegMunt = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {


};


var checkSpelerGeraakt = function() {

 
};

/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */



/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    


//speler raakt rand scherm 
if ((spelerX < 21 || spelerY < 21 || spelerX > 1219 || spelerY > 659 ) 

//speler raakt vjand 
||(spelerY - vijandY < 25 && spelerY - vijandY > -25 && spelerX - vijandX < 25 && spelerX - vijandX > -25 ) 

|| (spelerY - fijandY < 25 && spelerY - fijandY > -25 && spelerX - fijandX < 25 && spelerX - fijandX > -25 )

|| (spelerY - tijandY < 25 && spelerY - tijandY > -25 && spelerX - tijandX < 25 && spelerX - tijandX > -25 )

|| (spelerY - rijandY < 25 && spelerY - rijandY > -25 && spelerX - rijandX < 25 && spelerX - rijandX > -25 )

|| (spelerY - sijandY < 25 && spelerY - sijandY > -25 && spelerX - sijandX < 25 && spelerX - sijandX > -25 )

|| (spelerY - lijandY < 25 && spelerY - lijandY > -25 && spelerX - lijandX < 25 && spelerX - lijandX > -25 )
) 
{

spelerX = spelerX - 2000
fill("#87CEFA");
rect(20, 20, 1240, 680);

fill("black");
textSize(40);
text('ontwijk de vijanden', 50, 300);
text('raakt een vijand jou, dan is het game over', 50, 350);text('beweeg jouw speler met de cursor toets', 50, 400);
text('raak jij een zijkant van het scherm is het game over', 50, 450);
text('raakt een vijand een zijkant van het scherm krijgen', 50, 500);
text('alle vijanden een nieuwe positie', 50, 550);
fill("black");
textSize(100);
text('GAME OVER', 50, 120);

fill("white");
textSize(55);
text('klik op refresh om opnieuw te spelen', 50, 650);
text('Catch Me If You Can !!', 50, 220);
}
  return false;
};




 

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegFijand();
      beweegTijand(); 
      beweegRijand();
      beweegKogel();
      beweegSpeler();
      beweegSijand();
      beweegLijand();
      checkvijand();

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      
      tekenVijand(vijandX, vijandY);
      tekenFijand(fijandX, fijandY);
      tekenTijand(tijandX, tijandY);
      tekenRijand(rijandX, rijandY);
      tekensijand(sijandX, sijandY);
      tekenlijand(lijandX, lijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
