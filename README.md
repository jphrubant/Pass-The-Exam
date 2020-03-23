## Pass The Exam

```
Description:
Pass The Exam is a game where the player needs to ‘read’(catch) as many books as possible within 60 seconds. If the player touches a clock, 5 seconds of gaming time is removed from the countdown.
The books are falling from top to bottom and the player has to collide with them on a left to right axis. 
```

## MVP (DOM - CANVAS) 

```
This is a game where a player has to collide with 20 items.
```

## Backlog
```
- Spinning books 
- Animated player
- Decreasing score when books fall out of the screen
- Game over if score is < 0 + Game over screen.
- Have different books with different speed/scores
```

## Pass The Exam - Data Structure

```
Main.js:  
- buildDomeElement(){}
- buildSplashScreen(){} 
- buildGameScreen(){}
- buildWinScreen(){}
-removwPreviousScreen(){}

Game.js
- Game{}
- didCollideBook(){}
- didCollideEnemy(){} 
- updateScore(){}
- finalScore(){}
- arrayUpdater(){}
- elementInstanciator(){}
- arrayFilter(){}

Player.js: 
- Player{}
- create(){}
- setDirection(){}
- updatePosition(){}
- wallCollision(){}
	
Books.js:  
- Book{}
- create(){}
- updatePosition(){}
- isInScreen(){}
- wallCollision(){}
```

## States and State Transitions
```
 - Splash Screen gameScreen
    buildSplashScrteen = () => {}

- Game Screen
    buildGameScreen = () => {}
    game.startGame()

- Win Screen
    builsWinScreen = () => {}
    buildGameScreen()
``
 
## Links

- [Trello](https://trello.com/b/KO8v69hS/pass-the-exam)

- [Git](https://github.com/jphrubant/Pass-The-Exam)

- [Slides](https://docs.google.com/presentation/d/1AKM3zbthBogAFCACLj8Hs0m68whEW3fjn9G5P19sw5A/edit?usp=drive_web&ouid=105431715516864946013)

