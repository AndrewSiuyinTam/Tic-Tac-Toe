

// Use a factory for a player because we need multiple of these
const player = (playerName,symbol) => {
    const getPlayerName = () => playerName;
    const getSymbol = () => symbol;
    const plot = () => {
        
    }
    return {
        getPlayerName:getPlayerName,
        getSymbol:getSymbol
   
    };
}
//Create Module --> If you only need ONE of something, use a module(gameBoard,displayController), 
//Use factories if you need multiple of something, ie players
// Use IIFE(Immediately Invoking Function Expressions to immedietaly invoke function without plluting global namespace)
const gameBoard = (function()  {
    let board = document.querySelector('container');
    let gameBoardArr = ['','','',
                        '','','',
                        '','',''];
                        
    const winningCombo = [
        [1,2,3],[1,4,7],[1,5,9],
        [2,5,8],
        [3,5,7],[3,6,9],
        [4,5,6],
        [7,8,9]
    ];
    let elems = document.getElementsByClassName('cell');
    let _resetGame = function (){
        setTimeout(function () {
            gameBoardArr = [];
            for(let i = 0;i < elems.length ; i++){
                 elems[i].textContent = "";
        }
        _boardGenerator();
        }, 5000);
        
    }
    let _winGame = function(){
        let winnerMessage = document.getElementById('winner-message');
        for(let index = 0;index<gameBoardArr.length;index++){
            if(gameBoardArr[0] == 'O' && gameBoardArr[1] == 'O' && gameBoardArr[2] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                
                _resetGame();
            }
            if(gameBoardArr[0] == 'X' && gameBoardArr[1] == 'X' && gameBoardArr[2] == 'X' ){
                winnerMessage.textContent = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            
            if(gameBoardArr[0] == 'X' && gameBoardArr[3] == 'X' && gameBoardArr[6] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
                
            }
            if(gameBoardArr[0] == 'O' && gameBoardArr[3] == 'O' && gameBoardArr[6] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[0] == 'X' && gameBoardArr[4] == 'X' && gameBoardArr[8] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[0] == 'O' && gameBoardArr[4] == 'O' && gameBoardArr[8] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[1] == 'X' && gameBoardArr[4] == 'X' && gameBoardArr[7] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[1] == 'O' && gameBoardArr[4] == 'O' && gameBoardArr[7] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[2] == 'X' && gameBoardArr[4] == 'X' && gameBoardArr[6] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[2] == 'O' && gameBoardArr[4] == 'O' && gameBoardArr[6] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[0] == 'X' && gameBoardArr[1] == 'X' && gameBoardArr[2] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[2] == 'O' && gameBoardArr[5] == 'O' && gameBoardArr[8] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[3] == 'X' && gameBoardArr[4] == 'X' && gameBoardArr[5] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[0] == 'O' && gameBoardArr[1] == 'O' && gameBoardArr[2] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[6] == 'X' && gameBoardArr[7] == 'X' && gameBoardArr[8] == 'X' ){
                winnerMessage.innerHTML = 'Player 1 Wins! Play Again!'
                _resetGame();
            }
            if(gameBoardArr[6] == 'O' && gameBoardArr[7] == 'O' && gameBoardArr[8] == 'O' ){
                winnerMessage.innerHTML = 'Player 2 Wins! Play Again!'
                _resetGame();
            }
            // Tying functionality
            // if(gameBoardArr[0] != '' && gameBoardArr[1] != '' && gameBoardArr[2] != '' &&
            // gameBoardArr[3] != '' && gameBoardArr[4] != '' && gameBoardArr[5] != '' &&
            // gameBoardArr[6] != '' && gameBoardArr[7] != '' && gameBoardArr[8] != ''){
            //     winnerMessage.innerHTML = 'Its a tie!'
            //     _resetGame();
            // }
        }
    };
    const player1 = player('andrew','X');
    const player2 = player('bob','O');
    let currentPlayer = player1;
    let playerOneturn = true;
    let _getCurrentPlayer = function() {
        
    };
    let _boardGenerator = function(){
            let index = 0;
            let x_mark = document.createElement('p');
            x_mark.setAttribute('id','x_mark');

            for(let i = 0;i < elems.length ; i++){
                // elems[i].textContent = gameBoardArr[index++];
                elems[i].addEventListener('click',(e) => {
                    
                    //if current player is 1, then text content is X, if player 2, then 'O'
                    if(playerOneturn == true){
                        // if(player1.getSymbol() == 'X'){
                        //     x_mark.textContent = 'X';
                        // }
                        
                        elems[i].textContent = player1.getSymbol();
                        playerOneturn = false;
                        selectedCell = e.target.id.charAt(e.target.id.length-1)-1
                        console.log(selectedCell);
                        gameBoardArr[selectedCell] = 'X';
                        elems[i].setAttribute('id','x_mark');
                        console.log(gameBoardArr);
                        _winGame();
                        
                    }
                    else{
                        elems[i].textContent = player2.getSymbol();
                        playerOneturn = true;
                        selectedCell = e.target.id.charAt(e.target.id.length-1)-1
                        gameBoardArr[selectedCell] = 'O';
                        elems[i].setAttribute('id','x_mark');
                        console.log(gameBoardArr);
                        _winGame();
                    }
                })
            }
            
            console.log(elems.length); 
            console.log(gameBoardArr);
    };
    return{
        playGame: function (){
            _boardGenerator();
            console.log("run");
        },

    }
    return{
        playGame:playGame,
        gameBoardArr:gameBoardArr,
        winningCombo:winningCombo
    };
})();
gameBoard.playGame();






// console.log(player1.playerName);

