"use strict"

var player;

function Game(){
    console.log('GAME HAS BEEN CREATED');
    this.canvas = null;
    this.ctx = null;

    this.books = [];
    this.player = null; 
    this.img = null ;
    
    this.gameIsOver = false;
}

Game.prototype.startLoop = function(){
    var loop = function(){
        console.log('Looping');
    }
    requestAnimationFrame(loop);
    loop();
};

Game.prototype.start = function(){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.img = new Image(); 
    this.img.src = "https://www.fmirobcn.org/media/upload/cache/biblioteca_personal_joan_miro_1506610796_a1060338.jpg";
    this.ctx.drawImage(this.img, 0, 0);

    this.player = new Player ();
    this.player.create();

    this.startLoop();
}





//Game.prototype.startGame = function() {}
//game.prototype.updateScore(){}

// game.prototype.hasWon = function(){
  //  if(this.player.booksRead = 20){
    //buildWinScreen()
   // }
