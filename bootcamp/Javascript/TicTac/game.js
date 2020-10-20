let turnNumber = 0;
const player1 = Player("caine","X",1);
const player2 = Player("kaylie","O",2);
let players = [player1, player2];


function loadBoard(){
    let counter = 0;
    gameBoard.getBoard().forEach( (element) => {
        const gameSpace = document.createElement("div");
        gameSpace.classList.add("space");
        gameSpace.id = counter++;
        document.getElementById("board").appendChild(gameSpace);
    })

    addClick();
}

//change inner html of clicked element
function updateCell(e){
    const cellId = e.target.id
    const space = document.getElementById(cellId);
    const currentPlayer = players[turnNumber++ % 2];
    gameBoard.updateBoard(cellId,currentPlayer.getSymbol());
    space.innerHTML = currentPlayer.getSymbol();
    space.removeEventListener("click",updateCell);

    const result = gameBoard.checkForWinner();

    if(result === "draw")
        showWinner("draw");
    else if(result != "n" && result != undefined)
        showWinner(currentPlayer);
    
}

//add onclick to all gamespaces
function addClick(){
    let spaces = document.getElementsByClassName("space");
    Array.from(spaces).forEach( (space) => {
        space.addEventListener("click",updateCell);
    })
}

function showWinner(winner){
    alert(winner)
}