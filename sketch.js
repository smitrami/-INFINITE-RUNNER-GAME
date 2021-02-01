const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var boy, boy_img, girl, girl_img;
var ground;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cycles;
var TimeLimit = 5000;
var form, player, game;
function preload() {
  ground = loadImage("images/s.jpg");
  boy_img = loadImage("images/cycle1.gif");
  girl_img = loadImage("images/cycle3.gif");

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();



}

function draw() {

  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  drawSprites();
  //rec2.display();

}




