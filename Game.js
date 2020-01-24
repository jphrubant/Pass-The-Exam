"use strict"

function Game(){
    console.log('GAME HAS BEEN CREATED');
    this.canvas = this.canvas = null;
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
    this.canvasDiv = document.querySelector('.canvas-div');
    this.canvas = this.canvasDiv.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.setAttribute("width", 100);
    this.canvas.setAttribute("height", 100);

    this.player = new Player(canvas);
}

//game.prototype.updateScore(){}
//game.prototype.hasWon(){}*/