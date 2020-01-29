"use strict"

function Book(canvas, x, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.size = 50;
    this.x = x; 
    this.y = 0 - this.size;
    this.speed = speed;
};

Book.prototype.create = function() { // Function to create the books on screen.
    this.img = new Image(); 
    this.img.src = "images/brownbook.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
 };

Book.prototype.updatePosition = function (){ //Function to update book position according to speed.
    this.y = this.y + this.speed; 
 }

Book.prototype.isInScreen = function(){ // Function to remove books once out of game space.
      return this.y + this.size <= this.canvas.height;
 };

Book.prototype.wallCollision = function(book){ // Function to remove books that do not fit the game space.

    console.log(book);

    var leftWall = 0 + this.size;
    var rightWall = this.canvas.width - this.size;

    if(this.x < leftWall){
        this.x += 2000;
    } 
    else if (this.x  > rightWall){
        this.x += 2000;
    }
};


