var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var score = 0;
var health = 5;

var form, player, game;
var balls,ball1,ball2,ball3,ball4;
var ball1Img,ball2Img,ball3Img,ball4Img;
var fireball,slimeBall,slime,fire,coin,stone,bomb,coins1;
var obstacleGroup,fire_img,slime_img,slimeball_img,fireball_img,stone_img,coins1_img,bomb_img;
var backgroundImage;
var coinsGroup,coin_Img,obstacles;
var firesGroup,slimesGroup;


function preload(){
  ball1Img = loadAnimation("images/Soccerball.png","images/Soccerball1.png","images/Soccerball2.png")
  ball2Img = loadAnimation("images/Basketball.png","images/Basketball1.png","images/Basketball2.png")
  ball3Img = loadAnimation("images/Volleyball.png","images/Volleyball1.png","images/Volleyball2.png")
  ball4Img = loadAnimation("images/woodenball.png","images/woodenball1.png","images/woodenball2.png")
  track = loadImage("images/road.png");
 fireball_img = loadAnimation("images/fireball.png","images/fireball1.png","images/fireball2.png","images/fireball3.png");
  slimeball_img = loadAnimation("images/Slime Ball.png","images/Slime Ball1.png","images/Slime Ball2.png");
  fire = loadImage("images/fire.png")
 slime = loadImage("images/slime.png")
  coin = loadImage("images/coin.png")
  coins1 = loadImage("images/coins1.png")
  stone = loadImage("images/s1.png")
  bomb = loadImage("images/bomb.png")

}

function setup(){
    canvas = createCanvas(800,900);

    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    xVel = 0;
    yVel = 0
      
    }
    
  
    
  
  
  function draw(){
    
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }

   
}