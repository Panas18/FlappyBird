const gameArea = document.querySelector(".game--area");
const gameBase = document.querySelector(".game--base");
const gameOver = document.querySelector(".game--over");
const scoreTxt = document.querySelector(".score--value");
const scoreContainer = document.querySelector(".score");
const PIPEWIDTH = 52;
const GAP = 130;
const RESTARTPOS = 350;
var SCORE = 0;
var START = false;

birdStyle = [
  "redbird-upflap.png",
  "redbird-midflap.png",
  "redbird-downflap.png",
];
