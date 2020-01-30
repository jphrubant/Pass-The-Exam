"use strict"

function Player (canvas) {
    this.canvas = canvas; 
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.x = canvas.width / 2;
    this.y = 295;
    this.size = 70;
    this.direction = 0;
    this.speed = 4;
};

Player.prototype.create = function() { // Function to create the player on screen
    this.img = new Image(); 
    this.img.src = "images/adult-emoji.png";
    this.ctx.drawImage(this.img, this.x , this.y, this.size, this.size);
};

Player.prototype.setDirection = function (direction){ // Function to define the movement direction
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

Player.prototype.updatePosition = function() { // Function to update the position according to speed
    this.x = this.x + this.direction * this.speed; 
  };

Player.prototype.wallCollision = function(){ // Function to keep player within the canvas width
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


