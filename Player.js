"use strict"

function Player (canvas) {
    //this.canvas = canvas; 
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.booksRead = 0;
    this.x = this.canvas.width / 2;
    this.y = 600;
    this.size = 50;
    this.direction = 0;
    this.speed = 3;
};

Player.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "https://img.favpng.com/8/17/23/emoji-apple-gender-neutrality-png-favpng-Z30CVYGeNpGaWikZnncZSrji7.jpg";
    this.ctx.drawImage(this.img, this.x , this.y, 125, 100);
};

Player.prototype.setDirection = function (direction){
    if (direction === "left"){
        this.direction =  -1;
    } else if (direction === "right"){
        this.direction = 1;
    } else if (direction === "stop"){
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
    } else if (this.x + this.size > rightWall){
        this.direction = -1;
    }
};

Player.prototype.updateScore = function () {
    this.booksRead += 1;
    console.log(this.booksRead);
}

