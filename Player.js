"use strict"

function Player (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.booksRead = 0;
    this.size;// need to hardcode

    this.x = canvas.width / 2;
    this.y = 50;
};

Player.prototype.create = function() {
    
}


/*
player.prototype.update(){}
player.prototype.movement(){}
player.prototype.screenCollision(){}
player.prototype.bookCollision(){} */