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

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

//var KEY_LEFT = 37;
//var KEY_RIGHT = 39;
//var key_up = 38;
//var key_down = 40;



/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("#82FA58");
  rect(20, 20, width - 2 * 20, height - 2 * 20);

};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    
 
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



/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


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


if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 2;
}


 if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 2;
  }


 if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY - 2;
  }


 if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY + 2;
  }
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
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    


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
