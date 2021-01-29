var canvas

var gameState = 0;
var playerCount;
var allPlayers;
var distance=0;
var database;
var form, player, game;
var sounds;
var audio1
var s1, s2;

function preload(){
  audio1 = loadSound("sound.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){

if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
  form.hide();
  audio1.play();
}
if(gameState === 2){
  game.end();
}
}
