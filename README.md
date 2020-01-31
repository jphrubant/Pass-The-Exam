## Pass The Exam

```
Description:
Pass The Exam is a game where the player needs to ‘read’(catch) as many books as possible within 60 seconds.
If the player collides with a clock, 5 seconds will be taken off the game time.
In the game, the player can never lose but can always do better.
```

## MVP (DOM - CANVAS) 

```
The player has to catch as many books as possible in 60 seconds.
```

## Backlog
```
- Spinning books 
- Animated player
- Add levels
- Decreasing score when books fall out of the screen
- Game over if score is < 0 + Game over screen.
- Have different books with different speed/scores
```

## Pass The Exam - Data Structure

```
Main.js:  
- buildDomElement(){}
- buildSplashScreen(){} 
- buildGameScreen(){}
- buildWinScreen(){}
- removePreviousScreen(){}

Game.js
- Game(){}
- Game.prototype.startGame(){}
- Game.prototype.startLoop(){}
- Game.prototype.didCollideBook(){}
- Game.prototype.didCollideEnemy(){}
- Game.prototype.updateScore(){}
- Game.prototype.finalScore(){}
- Game.prototype.arrayUpdater(){}
- Game.prototype.elementInstanciator(){} 
- Game.prototype.arrayFilter(){}

Player.js: 
- Player(){}
- Player.prototype.create(){}
- Player.prototype.setDirection(){}
- Player.prototype.updatePosition(){}
- Player.prototype.wallCollision(){}
	
Books.js:  
- Book(){}
- Book.prototype.create(){}
- Book.prototype.updatePosition(){}
- Book.prototype.isInScreen(){}
- Book.prototype.wallCollision(){}

Enemy.js:
- Enemy(){}
- Enemy.prototype.create(){}
```

## States and State Transitions
```
Definition of the different states and their transition
(transition functions)

 - Splash Screen gameScreen
    function createSplashScreen(){}
    function removePreviousScreen(){}

- Game Screen
    function createGameScreen(){}
    function removePreviousScreen(){}

- Win Screen
    function createWinScreen(){}
    function removePreviousScreen(){}
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

```
 
## Links
```
- Trello

    https://trello.com/b/KO8v69hS/pass-the-exam

- Git

    https://github.com/jphrubant/Pass-The-Exam

- Slides

    https://docs.google.com/presentation/d/1AKM3zbthBogAFCACLj8Hs0m68whEW3fjn9G5P19sw5A/edit
```
