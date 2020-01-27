"use strict"

function Book(canvas, x, speed){
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = null;
    this.size = 55;
    this.x = x - this.size; 
    this.y = 0 - this.size;
    this.speed = speed;
};

Book.prototype.create = function() {
    this.img = new Image(); 
    this.img.src = "https://png2.cleanpng.com/sh/88bf0afc8487062d4773b18f0718ca53/L0KzQYm3U8I6N5JniZH0aYP2gLBuTfVud5tuReJAdHnxPcS0kQJibaV0ittqboOwcrF2i711bal5Rd9uc4Pkd7r1h710fJpoRdR4b3uwc7F9hgIuPZJnfKVrYkS5Q4e3V8cvPGI3UaM5OUS0RYO5U8UyOGM9TKICMT7zfri=/kisspng-emoji-putin-s-praetorians-book-text-messaging-stic-book-cover-5abd3bb4636077.4129109415223510284071.png";
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
 };

Book.prototype.updatePosition = function (){
    this.y = this.y + this.speed; 
 }

Book.prototype.isInScreen = function(){
      return this.y + this.size < this.canvas.height;
 };
