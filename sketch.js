var canvas;

var gameState = 0;
var playerCount;

var database;

var form,player,game;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){

}