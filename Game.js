"use strict"

function Game(){
    this.canvas = null;
    this.ctx = null;
    this.book = null;
    this.booksArray = [];
    this.enemiesArray = [];
    this.player = null; 
    this.img = null ;
    this.booksRead = 0;
}

Game.prototype.startGame = function(){            // Function to initiate player
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.player = new Player(this.canvas);
    
    this.movement = function (event) {
        if (event.key === "ArrowLeft") {
            this.player.setDirection("left");
        } 
        else if (event.key === "ArrowRight") {
            this.player.setDirection("right");
        } 
        else if (event.key === " "){
            this.player.setDirection("stop");
        }
      };
    
    window.addEventListener("keydown", this.movement.bind(this));

    this.startLoop();
};

Game.prototype.startLoop = function(){      // Function to start gaming loop
   
    var loop = function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.create();
        this.player.wallCollision();
        
        if(Math.random() > 0.98){
            var randomX = Math.random() * this.canvas.width; 
            var newBook = new Book(this.canvas, randomX, 2);
            this.booksArray.push(newBook);
        };

        if(Math.random() > 0.99){
            var randomX = Math.random() * this.canvas.width; 
            var newEnemy = new Enemy(this.canvas, randomX, 1);
            this.enemiesArray.push(newEnemy);
        };

        this.booksArray.forEach(function(book){
            book.create();
            book.updatePosition();
            book.wallCollision();
        });    

        this.enemiesArray.forEach(function(enemy){
            enemy.create();
            enemy.updatePosition();
            enemy.wallCollision();
        });   

        this.didCollideBook(this.booksArray);

        this.didCollideEnemy(this.enemiesArray);

        this.booksArray = this.booksArray.filter(function(book){ 
            return book.isInScreen(); 
        });

        this.enemiesArray = this.enemiesArray.filter(function(enemy){ 
            return enemy.isInScreen(); 
        });

        var score = document.querySelector('.score'); 
        if(score !== null){

            requestAnimationFrame(loop);
        }
        
    }.bind(this);

    loop();
}

Game.prototype.didCollideBook = function(booksArray){   // Function to check if player collided with any books.
    var playerLeft =  this.player.x;
    var playerRight = this.player.x + this.player.size;
    var playerTop = this.player.y;
    var playerBottom = this.player.y + this.player.size;

    booksArray.forEach(function(book){

    var bookLeft = book.x;
    var bookRight = book.x + book.size;
    var bookTop = book.y;
    var bookBottom = book.y + book.size;

    var collideRight = bookLeft <= playerRight && bookRight >= playerLeft;
    var collideLeft = bookRight >= playerLeft && bookLeft <= playerRight;
    var collideTop = bookBottom >= playerTop && bookTop <= playerBottom;
    var collideBottom = bookBottom <= playerBottom && bookBottom >= playerTop;
  
    if ((collideLeft || collideRight) && (collideTop || collideBottom)){
        this.updateScore();
        pageTurn.volume = 0.5;
        pageTurn.play();
        book.x += 2000; 
        } 
  
    }.bind(this));
};

Game.prototype.didCollideEnemy = function(enemiesArray){   // Function to check if player collided with any enemies.
    var playerLeft =  this.player.x;
    var playerRight = this.player.x + this.player.size;
    var playerTop = this.player.y;
    var playerBottom = this.player.y + this.player.size;

    enemiesArray.forEach(function(enemy){

    var enemyLeft = enemy.x;
    var enemyRight = enemy.x + enemy.size;
    var enemyTop = enemy.y;
    var enemyBottom = enemy.y + enemy.size;

    var collideRight = enemyLeft <= playerRight && enemyRight >= playerLeft;
    var collideLeft = enemyRight >= playerLeft && enemyLeft <= playerRight;
    var collideTop = enemyBottom >= playerTop && enemyTop <= playerBottom;
    var collideBottom = enemyBottom <= playerBottom && enemyBottom >= playerTop;
  
    if ((collideLeft || collideRight) && (collideTop || collideBottom)){
        countdownToWinScreen -= 5;
        negative.volume = 0.5;
        negative.play();
        enemy.x += 2000; 
        } 
  
    }.bind(this));
};

Game.prototype.updateScore = function () {   // Function to update score when player collided with book.
    this.booksRead ++;
    var score = document.querySelector('.score');
    if(score !== null){                   
        score.innerHTML = this.booksRead; 
    } 
    return this.booksRead;    
};

Game.prototype.finalScore = function () {   // Function to display final score on Win Screen
    return this.booksRead;
}
