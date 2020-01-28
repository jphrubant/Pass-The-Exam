"use strict"

function Player (canvas) {
    //this.canvas = canvas; 
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.booksRead = 0;
    this.x = this.canvas.width / 2;
    this.y = 200;
    this.size = 40;
    this.direction = 0;
    this.speed = 3;
};

Player.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "https://www.telegraph.co.uk/content/dam/technology/2017/11/01/genderless-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=1400";
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

