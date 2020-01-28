"use strict"

function Book(canvas, x, speed){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.size = 50;
    this.x = x - this.size; 
    this.y = 0 - this.size;
    this.speed = speed;
};

Book.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "images/book.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
 };

Book.prototype.updatePosition = function (){
    this.y = this.y + this.speed; 
 }

Book.prototype.isInScreen = function(){
      return this.y + this.size < this.canvas.height;
 };
