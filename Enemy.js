"use strict"

function Enemy(canvas, x, speed){
    Book.call(this, canvas, x, speed)
    this.img = null;
    this.size = 40;
    this.y = 0 - this.size;
}

Enemy.prototype = Object.create(Book.prototype); 
Enemy.prototype.constructor = Enemy;

Enemy.prototype.create = function() { // Function to create the enemies on screen.
    this.img = new Image(); 
    this.img.src = "images/dunce.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
 };



 