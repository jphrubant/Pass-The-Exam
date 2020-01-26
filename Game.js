"use strict"

function Game(){
    console.log('GAME HAS BEEN CREATED');
    this.canvas = null;
    this.ctx = null;

    this.books = [];
    this.player = null;    
}

Game.prototype.startLoop = function(){
    var loop = function(){
        console.log('Looping');
    }
    requestAnimationFrame(loop);
    loop();
    this.player.create();
};

Game.prototype.startGame = function() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    //this.canvas.style.backgroundColor = "blue";

    var img = new Image(); 
    img.src = "https://www.fmirobcn.org/media/upload/cache/biblioteca_personal_joan_miro_1506610796_a1060338.jpg";
    this.ctx.drawImage(img, 0, 0);
}


//game.prototype.updateScore(){}

// game.prototype.hasWon = function(){
  //  if(this.player.booksRead = 20){
    //buildWinScreen()
   // }
