## Pass The Exam

```
Description:
Pass The Exam is a game where the player needs to ‘read’(catch) at least 20 books in order to pass the ‘exam’. The books are falling from above and the player has to collide with them on a left to right axis. 
```

## MVP (DOM - CANVAS) 

```
This is a game where a player has to collide with 20 items.
```

## Backlog
```
- Spinning books 
- Animated player
- Add sound upon collision.
- Decreasing score when books fall out of the screen
- Game over if score is < 0 + Game over screen.
- Have different books with different speed/scores
```

## Pass The Exam - Data Structure

```
Main.js:  
- buildSplashScreen(){} 
- buildGameScreen(){}
- buildWinScreen(){}

Game.js
- Game(){}
- game.prototype.create(){}
- game.prototype.startLoop(){} 
- game.prototype.updateScore(){}
- game.prototype.hasWon(){}

Player.js: 
- Player(){}
- player.prototype.create(){}
- player.prototype.update(){}
- player.prototype.movement(){}
- player.prototype.screenCollision(){}
- player.prototype.bookCollision(){}
	
Books.js:  
- Book(){}
- book.prototype.create(){}
- book.prototype.update(){}
- book.prototype.didCollide(){}
- book.prototype.isInScreen(){}
```

## States and State Transitions
```
Definition of the different states and their transition
(transition functions)

 - Splash Screen gameScreen
    function createSplashScreen(){}
    function startGame(){}

- Game Screen
    function createGameScreen(){}
    game.prototype.hasWon(){}

- Win Screen
    function createWinScreen(){}
    function startGame(){}
```

## Task
```
- Main.js:  buildSplashScreen(){} 

- Main.js:  buildGameScreen(){}

- Main.js:  buildWinScreen(){}

- Game.js: Game(){}

- Game.js: game.prototype.startLoop(){} 

- Game.js: game.prototype.create(){}

- Player.js: Player(){}

- Player.js: player.prototype.create(){}

- Player.js: player.prototype.update(){}

- Player.js: player.prototype.movement(){}

- Books.js: Book(){}

- Books.js: book.prototype.create(){}

- Books.js: book.prototype.update(){}

- Player.js:player.prototype.screenCollision(){}

- Player.js:player.prototype.bookCollision(){}

- Books.js: book.prototype.didCollide(){}

- Books.js: book.prototype.isInScreen(){}

- Game.jsgame.prototype.updateScore(){}

- Game.jsgame.prototype.hasWon(){}
```
 
## Links
```
- Trello

    https://trello.com/b/KO8v69hS/pass-the-exam

- Git

    https://github.com/jphrubant/Pass-The-Exam

- Slides

URls for the project presentation (slides) Link Slides.com
```
