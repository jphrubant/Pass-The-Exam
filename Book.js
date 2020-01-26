"use strict"

function Book(canvas, x, speed){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.size = 40;
    this.x = x - this.size;
    this.y = 0 - this.size;
    this.speed = speed;
};

Book.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "https://banner2.cleanpng.com/20180329/che/kisspng-emoji-putin-s-praetorians-book-text-messaging-stic-book-cover-5abd3bb40e18e9.5758978915223510280578.jpg";
    this.ctx.drawImage(this.img, this.x, this.y, 80, 80);
 };

Book.prototype.updatePosition = function (){
    this.y = this.y + this.speed; 
 }

Book.prototype.isInScreen = function(){
      return this.y + this.size < this.canvas.height;
 };

//book.prototype.didCollide(){}


