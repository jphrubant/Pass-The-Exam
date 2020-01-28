"use strict"

function Player (canvas) {
    //this.canvas = canvas; 
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.x = 50;
    this.y = 100;
    this.size = 20;
    this.direction = 0;
    this.speed = 3;
};

Player.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "images/adult-emoji.png";
    this.ctx.drawImage(this.img, this.x , this.y, this.size, this.size);
};

Player.prototype.setDirection = function (direction){
    if (direction === "left"){
        this.direction =  -1;
    } 
    else if (direction === "right"){
        this.direction = 1;
    } 
    else if (direction === "stop"){
        this.direction = 0;
    }
}

Player.prototype.updatePosition = function() {
    this.x = this.x + this.direction * this.speed; 
  };

Player.prototype.wallCollision = function(){
    this.updatePosition();

    var leftWall = 0;
    var rightWall = this.canvas.width - this.size;

    if(this.x < leftWall){
        this.direction = 1;
    } 
    else if (this.x  > rightWall){
        this.direction = -1;
    }
};


