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

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("#DDA0DD"); 
  rect(20, 20, width - 2 * 20, height - 2 * 20);

fill("#8eee7f");
rect(20, 620, 1240, 75);

fill("white");
rect(50, 50, 250, 50);

fill("#9f6060");
rect(20, 640, 1240, 60);
};

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



}    


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

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



  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {

    //if (spelerX = vijandX ) {
//result ='true';
//} 

  return false;
};
//&& spelerY = vijandY 

/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
//if ( spelerY=vijandY ) {

//fill("black");
//textSize(100);
//text('TOUCH ENEMY GAMEOVER', 400, 350);



if (spelerX < 21 || spelerY < 21 || spelerX > 1219 || spelerY > 659){

fill("black");
textSize(100);
text('GAME OVER', 350, 400);

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
      beweegKogel();
      beweegSpeler();
      
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
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
