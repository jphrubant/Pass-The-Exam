"use strict"

var pageTurn = new Audio("audio/BookFlip13.wav");
var applause = new Audio("audio/applause.wav")
var bookImg;

var game;
var splashScreen;
var username;
var gameScreen;
var winScreen;
var divElement = document.createElement("div");

function buildDomElement(htmlStructure){ // Dom Element Builder 
    divElement.innerHTML = htmlStructure;
    return divElement;
};

function buildSplashScreen(){  // Splash Screen Dom Generator
    removePreviousScreen()
    
    splashScreen = buildDomElement(`
    <main class="splash-screen-main">
        <div class="splash-screen-div">
            <h1>PASS THE EXAM</h1>
            <p>Prepare for your next exam by reading as many books as possible. <br><br> Be quick, you only have 60 seconds!</p>
            <form>
                <label for="name">Enter your name below to start studying:</label>
                    <div class="cta-div">
                        <input id="name" name="name" type="text" placeholder="Type Name">
                        <button type="submit" class="start-button">Let's learn!</button>
                    </div>
            </form>
        </div>
    </main>
    `)

    document.body.appendChild(splashScreen);

    var startButton = document.querySelector('button')
    startButton.addEventListener('click', function(){
        username = document.querySelector('#name').value;
        buildGameScreen(username)
    });
};

function buildGameScreen(playerName){ // Build Game Screen
    removePreviousScreen()

    gameScreen = buildDomElement(`
    <main class="game-screen-main">
    
        <div class="game-div">
            <div class='counters-div'>
                <p>${playerName}, so far you read: <span class="score">0</span></p>
                <h1>LIBRARY</h1>
                <p class="countDown"></p> 
            </div>
        <div>
        <canvas height="435" width="750"></canvas>
    </main>
    `)

    document.body.appendChild(gameScreen);

    var countDown = document.querySelector(".countDown");
    var countdownToWinScreen = 60;
    var timeoutID;
   
    function printCounter(){
        countdownToWinScreen--;
        countDown.innerHTML = `Countdown: ${countdownToWinScreen}`;
        if (countdownToWinScreen !== 0){
        timeoutID = setTimeout(printCounter, 1000);
            } else if (countdownToWinScreen === 0){
                clearTimeout(timeoutID);
                buildWinScreen(username);
            } 
        }
    printCounter(); 
    
    game = new Game();
    game.startGame();
};    

function buildWinScreen(playerName){ // Build Win Screen
    removePreviousScreen();
    
    var winScreen = buildDomElement(`
    <main class="win-screen-main">
        <div class="win-screen-div">
            <h1>YOU PASSED THE EXAM!!!</h1>
            <p>WOW! ${playerName}, you managed to read <span class="final-score">0</span> books</p>
            <button type="win-screen-button" class="win-screen-button">Go back to studyuing</button>
        </div>
    </main>
    `);
    
    document.body.appendChild(winScreen);

    applause.volume = 0.5;
    applause.play();
    
    var winScreenScore = document.querySelector('.final-score')
    winScreenScore.innerHTML = game.finalScore();

    var startButton = document.querySelector('button')
    startButton.addEventListener('click', function(){
        buildGameScreen(username)
    });
}

function removePreviousScreen(){ // DOM Element Remover
    divElement.remove();
};

window.addEventListener('load', buildSplashScreen);

