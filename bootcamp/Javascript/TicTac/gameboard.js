const gameBoard = (() => {
    let board = ["empty","empty","empty",
                 "empty","empty","empty",
                 "empty","empty","empty"];

    const getBoard = () => {
        return board;
    }

    const updateBoard = (index, playerSymbol) => {
        if(board[index] == "empty")
            board[index] = playerSymbol;
    }

    const checkForWinner = () => {

        //check rows
        const rowValue = checkRows();
        const colValue = checkCols();
        const diagonalValue = checkDiag();
        if(rowValue != "n")
            return rowValue;
        else if(colValue != "n")
            return colValue;
        else if(diagonalValue != "n")
            return diagonalValue;
        else if(!board.includes("empty"))
            return "draw";
    }

    const checkRows = () => {
        for(let i = 0; i <= 6; i+=3){
            if(board[i] != "empty" && board[i+1] === board[i+2] && board[i] === board[i+1] && board[i] === board[i+2])
                return board[i];
        }

        return "n"
    }

    const checkCols = () => {
        for(let i = 0; i <= 2; i++){
            if(board[i] != "empty" && board[i+3] == board[i+6] && board[i] == board[i+3])
                return board[i];
        }

        return "n"
    }
    
    const checkDiag = () => {
        if(board[0] != "empty" && board[4] === board[8] && board[0] === board[4] && board[0] ===board[8])
            return board[0];
        if(board[2] != "empty" && board[4] === board[6] && board[4] === board[2] && board[2] ===board[6])
            return board[2];
        
            return "n";
    }

    

    return {getBoard, updateBoard,checkForWinner};
    
})();