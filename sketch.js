var canvas;

var gameState = 0;
var playerCount;

var database;

var form,player,game;

var allPlayers;

var players, player1, player2, player3, player4;

function setup(){
    canvas = createCanvas(displayWidth - 5, displayHeight -5);
    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
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