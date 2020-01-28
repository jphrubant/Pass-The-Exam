"use strict"

function Book(canvas, x, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
    this.img = null;
    this.size = 70;
    this.x = x + this.size; 
    this.y = 0 - this.size;
    this.speed = speed;
};

Book.prototype.create = function() {
    this.ctx.drawImage(bookImg, this.x, this.y, this.size, this.size);
 };

Book.prototype.updatePosition = function (){
    this.y = this.y + this.speed; 
 }

Book.prototype.isInScreen = function(){
      return this.y + this.size < this.canvas.height;
 };
