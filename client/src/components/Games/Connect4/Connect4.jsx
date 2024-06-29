import React from "react";
import "./Connect4.css";
import _ from "lodash";
import ToggleButtonWrapper from "./C4_Button";

// If you want to give choices to the player of switching between naive ai and minimax ai
// remove comments from import ToggleButtonWrapper line and from line 557

class Connect4 extends React.Component {
    /*
      Constructor to keep track of the following
      1. Players turn
      2. Players
      3. Board
      4. Game Finished?
      5. Messages
      */
    constructor(props) {
        super(props);

        // Players and the state
        this.state = {
            player1: 1,
            player2: 2,
            currentPlayer: null,
            board: [],
            gameOver: false,
            message: "",
            mode: true // true = naive ai and false is minimax ai
        };

        // Bind play function to App component
        this.play = this.play.bind(this);
        this.getModeChange = this.getModeChange.bind(this);

        // Initialize the board
        this.initBoard();
    }

    // Starts new game
    initBoard() {
        // Create a blank 6x7 matrix
        let board = [];
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) {
                row.push(null);
            }
            board.push(row);
        }

        this.setState({
            board,
            currentPlayer: this.state.player1,
            gameOver: false,
            message: ""
        });
        this.randomStart();
    }

    // Toggle the player
    togglePlayer() {
        return this.state.currentPlayer === this.state.player1
            ? this.state.player2
            : this.state.player1;
    }

    // pick random spot
    randomPlay() {
        return Math.floor(Math.random() * Math.floor(7));
    }

    // random choice from array
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // random player starts
    randomStart() {
        const randomPlayer = Math.floor(Math.random() * (3 - 1) + 1);
        if (randomPlayer === this.state.player2) {
            this.setState(
                {
                    currentPlayer: randomPlayer
                },
                () => {
                    this.aiPlay();
                }
            );
        }
    }

    // AI Plays
    aiPlay() {
        const board = this.state.board;
        let col, minimaxScore;
        if (this.state.mode) {
            col = this.pickBestMove();
        } else {
            [col, minimaxScore] = this.minimax(board, 4, true);
        }
        this.play(col);
    }

    // put the move
    makeMove(board, row, col, player) {
        return (board[row][col] = player);
    }

    // Make a move
    play(c) {
        if (!this.state.gameOver) {
            // Place piece on board
            let board = this.state.board;
            for (let r = 5; r >= 0; r--) {
                if (!board[r][c]) {
                    board[r][c] = this.state.currentPlayer;
                    break;
                }
            }

            // Check status of board
            let result = this.checkAll(board);
            if (result === this.state.player1) {
                this.setState({
                    board,
                    gameOver: true,
                    message: "Player 1 (red) wins!"
                });
            } else if (result === this.state.player2) {
                this.setState({
                    board,
                    gameOver: true,
                    message: "Player 2 (yellow) wins!"
                });
            } else if (result === "draw") {
                this.setState({
                    board,
                    gameOver: true,
                    message: "Draw game."
                });
            } else {
                this.setState(
                    {
                        board,
                        currentPlayer: this.togglePlayer()
                    },
                    () => {
                        setTimeout(
                            function () {
                                // Call ai play
                                if (this.state.currentPlayer === this.state.player2) {
                                    this.aiPlay();
                                }
                            }.bind(this),
                            500
                        );
                    }
                );
            }
        } else {
            this.setState({
                message: "Game over. Please start a new game."
            });
        }
    }

    // Check if the vertical is a winning move
    checkVertical(board) {
        // Check only if row is 3 or greater
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c]) {
                    if (
                        board[r][c] === board[r - 1][c] &&
                        board[r][c] === board[r - 2][c] &&
                        board[r][c] === board[r - 3][c]
                    ) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    // Check if the horizontal is a winning move
    checkHorizontal(board) {
        // Check only if column is 3 or less
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (
                        board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]
                    ) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    // Check if the positive slope is a winning move
    checkDiagonalRight(board) {
        // Check only if row is 3 or greater AND column is 3 or less
        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (
                        board[r][c] === board[r - 1][c + 1] &&
                        board[r][c] === board[r - 2][c + 2] &&
                        board[r][c] === board[r - 3][c + 3]
                    ) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    // Check if the negative slope is a winning move
    checkDiagonalLeft(board) {
        // Check only if row is 3 or greater AND column is 3 or greater
        for (let r = 3; r < 6; r++) {
            for (let c = 3; c < 7; c++) {
                if (board[r][c]) {
                    if (
                        board[r][c] === board[r - 1][c - 1] &&
                        board[r][c] === board[r - 2][c - 2] &&
                        board[r][c] === board[r - 3][c - 3]
                    ) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    // Check if the game is a draw game
    checkDraw(board) {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 7; c++) {
                if (board[r][c] === null) {
                    return null;
                }
            }
        }
        return "draw";
    }

    checkAll(board) {
        return (
            this.checkVertical(board) ||
            this.checkDiagonalRight(board) ||
            this.checkDiagonalLeft(board) ||
            this.checkHorizontal(board) ||
            this.checkDraw(board)
        );
    }

    componentDidMount() {
        // If this.initBoard() is causing side effects, call it here
        this.initBoard();
    }

    // get columns in a singular array
    arrayColumn(arr, n) {
        return arr.map(x => x[n]);
    }

    // get the nth column
    getNItems(arr) {
        const tempCol = [];
        for (let i = 0; i < arr.length - 3; i++) {
            tempCol.push(arr.slice(i, i + 4));
        }
        return tempCol;
    }

    // Get the count of a particular stone in the array.
    getCount(arr, n) {
        return arr.reduce((total, x) => (x === n ? total + 1 : total), 0);
    }

    // Is this a valid location to add the move to
    isValidLocation(arr) {
        return arr.includes(null);
    }

    // Score the move for AI
    scoreEvaluation(arr, player) {
        let score = 0;

        if (this.getCount(arr, player) === 4) {
            score += 100;
        } else if (
            this.getCount(arr, player) === 3 &&
            this.getCount(arr, null) === 1
        ) {
            score += 10;
        } else if (
            this.getCount(arr, player) === 2 &&
            this.getCount(arr, null) === 2
        ) {
            score += 5;
        } else if (
            this.getCount(arr, player) === 0 &&
            this.getCount(arr, null) === 6
        ) {
            score += 1;
        }
        if (this.getCount(arr, 1) === 3 && this.getCount(arr, null) === 1) {
            score -= 80;
        } else if (this.getCount(arr, 1) === 2 && this.getCount(arr, null) === 2) {
            score -= 10;
        }
        return score;
    }

    // flatten object
    flatten(arr) {
        return [].concat.apply([], arr);
    }

    posDiagonal(board, iCounter, jCounter) {
        let arr = [];
        for (let i = iCounter, j = jCounter; i >= 0, j < jCounter + 4; i--, j++) {
            arr.push(board[i][j]);
        }
        return arr;
    }

    negDiagonal(board, iCounter, jCounter) {
        let count = 0;
        let arr = [];
        for (let i = iCounter, j = jCounter; count < 4; i--, j--) {
            arr.push(board[i][j]);
            count++;
        }
        return arr;
    }

    // score the game vertically and horizontally
    scoreMove(board, player) {
        let score = 0;
        const row = [];
        const col = [];

        // Center column preferences
        let centerArray = [];
        for (let i = 0; i < 6; i++) {
            centerArray.push(board[i][3]);
        }
        score += this.getCount(centerArray, this.state.player2) * 6;

        // Horizontal moves for AI
        for (let i = 0; i < board.length; i++) {
            row.push(this.getNItems(board[i]));
        }
        const groupedRows = this.flatten(row);
        for (let i = 0; i < groupedRows.length; i++) {
            score += this.scoreEvaluation(groupedRows[i], this.state.player2);
        }

        // Vertical moves for AI
        for (let i = 0; i <= board.length; i++) {
            const tempCol = [];
            tempCol.push(this.getNItems(this.arrayColumn(board, i)));
            col.push(this.flatten(tempCol));
        }
        const groupedCols = this.flatten(col);
        for (let i = 0; i < groupedCols.length; i++) {
            score += this.scoreEvaluation(groupedCols[i], this.state.player2);
        }

        // Positive slopes
        let posArr;
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                posArr = this.posDiagonal(board, i, j);
                score += this.scoreEvaluation(posArr, this.state.player2);
            }
        }

        // negative slopes
        let negArr;
        for (let i = 3; i < 6; i++) {
            for (let j = 3; j < 7; j++) {
                negArr = this.negDiagonal(board, i, j);
                score += this.scoreEvaluation(negArr, this.state.player2);
            }
        }

        return score;
    }

    // Get all the valid locations
    getValidLocations() {
        const board = this.state.board;
        const validLocations = [];
        for (let i = 0; i < 7; i++) {
            if (this.isValidLocation(this.arrayColumn(board, i))) {
                validLocations.push(i);
            }
        }
        return validLocations;
    }

    // next row that can be played
    getNextPlayableRow(board, col) {
        for (let r = 5; r >= 0; r--) {
            if (board[r][col] === null) {
                return r;
            }
        }
    }

    // AI picks best moves
    pickBestMove() {
        const board = this.state.board;
        const validLocations = this.getValidLocations();
        let bestScore = Number.NEGATIVE_INFINITY;
        let bestColumns = this.randomPlay();
        for (let i = 0; i < validLocations.length; i++) {
            const row = this.getNextPlayableRow(board, validLocations[i]);
            let tempBoard = _.cloneDeep(board);
            this.makeMove(tempBoard, row, validLocations[i], this.state.player2);
            const score = this.scoreMove(tempBoard, this.state.player2);
            if (score > bestScore) {
                bestScore = score;
                bestColumns = validLocations[i];
            }
        }
        return bestColumns;
    }

    minimax(board, depth, maximizingPlayer) {
        const validLocations = this.getValidLocations();
        let result = this.checkAll(board);
        if (depth === 0 || this.state.gameOver) {
            if (this.state.gameOver) {
                if (result === this.state.player2) {
                    return [null, Number.POSITIVE_INFINITY];
                } else if (result === this.state.player1) {
                    return [null, Number.NEGATIVE_INFINITY];
                } else {
                    return [null, 0];
                }
            } else {
                return [null, this.scoreMove(board, this.state.player2)];
            }
        }
        if (maximizingPlayer) {
            let value = Number.NEGATIVE_INFINITY;
            let bestColumns = this.randomChoice(validLocations);
            for (let i = 0; i < validLocations.length; i++) {
                const row = this.getNextPlayableRow(board, validLocations[i]);
                let tempBoard = _.cloneDeep(board);
                if (row) {
                    this.makeMove(tempBoard, row, validLocations[i], this.state.player2);
                    const score = this.minimax(tempBoard, depth - 1, false);
                    if (score[1] > value) {
                        value = score[1];
                        bestColumns = validLocations[i];
                    }
                }
            }
            return [bestColumns, value];
        } else {
            let value = Number.POSITIVE_INFINITY;
            let bestColumns = this.randomChoice(validLocations);
            for (let i = 0; i < validLocations.length; i++) {
                const row = this.getNextPlayableRow(board, validLocations[i]);
                let tempBoard = _.cloneDeep(board);
                if (row) {
                    this.makeMove(tempBoard, row, validLocations[i], 1);
                    const score = this.minimax(tempBoard, depth - 1, true);
                    if (score[1] < value) {
                        value = score[1];
                        bestColumns = validLocations[i];
                    }
                }
            }
            return [bestColumns, value];
        }
    }

    getModeChange() {
        return this.setState({ mode: !this.state.mode });
    }

    handleWin = async (e) => {
        e.preventDefault();
        alert('You win');
    }

    render() {
        return (
            <div>
                <div
                    className="winorloss__connect4"
                    style={{
                        backgroundColor:
                            this.state.gameOver && this.state.currentPlayer === 1
                                ? "rgba(0,200,0,0.5)"
                                : "rgba(200,0,0,0.3)",
                        display:
                            this.state.gameOver && this.state.currentPlayer ? "table" : "none"
                    }}
                >
                    <div className="centerDiv__connect4">
                        {this.state.gameOver && this.state.currentPlayer === 1 ? (
                            (<div>
                                <h1 style={{
                                    textAlign: 'center',
                                    fontSize: '50px',
                                    color: '#fff',
                                }}>{"Yay, You WON!!!"}</h1>
                                <div
                                    className="button__connect4"
                                    onClick={this.handleWin}
                                >

                                    Proceed
                                </div>
                            </div>
                            )
                        ) : (
                            <div>
                                <h1 style={{
                                    textAlign: 'center',
                                    fontSize: '50px',
                                    color: '#fff',
                                }}>{"Shoot, you LOST!!!"}</h1>
                                <div
                                    className="button__connect4"
                                    onClick={() => {
                                        this.initBoard();
                                    }}
                                >

                                    New Game
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className="game__connect4">
                    <h1 className="header" style={{
                        marginTop: '10vh',
                        fontSize: '50px',
                        textAlign: 'center',
                        color: 'greenyellow',
                        textShadow: '1px 1px #000, 2px 2px #000, 3px 3px #000',
                        animation: 'blink 3s infinite',
                    }}> {this.props.name} </h1>

                    <ToggleButtonWrapper getModeChange={this.getModeChange} />
                    <div className={"row__connect4"}>
                        <div
                            className={
                                "red__connect4" +
                                (this.state.currentPlayer === this.state.player1
                                    ? " activePlayer__connect4"
                                    : " inactivePlayer__connect4")
                            }
                            style={{
                                marginRight: '1vw',
                            }}
                        >

                        </div>
                        <div
                            className={
                                "yellow__connect4" +
                                (this.state.currentPlayer === this.state.player2
                                    ? " activePlayer__connect4"
                                    : " inactivePlayer__connect4")
                            }
                            style={{
                                marginLeft: '1vw',
                            }}
                        >

                        </div>
                    </div>
                    <table style={{
                        margin: '0 auto',
                        height: '30vh',
                        width: '23vw',
                        borderSpacing: '0px 0px',
                    }}>
                        <tbody style={{
                            border: '8px ridge #50c8ff',
                            borderRadius: '50px',
                        }}>
                            {this.state.board.map((row, i) => (
                                <Row key={i} row={row} play={this.play} />
                            ))}
                        </tbody>
                    </table>

                    <p className="message" style={{
                        textAlign: 'center',
                        fontSize: '17px',
                    }}> {this.state.message} </p>{" "}
                </div>
            </div >
        );
    }
}

// Row component
const Row = ({ row, play }) => {
    return (
        <tr >
            {row.map((cell, i) => (
                <Cell key={i} value={cell} columnIndex={i} play={play} />
            ))}
        </tr>
    );
};

// Cell Component
const Cell = ({ value, columnIndex, play }) => {
    let color = "white__connect4";
    if (value === 1) {
        color = "red__connect4";
    } else if (value === 2) {
        color = "yellow__connect4";
    }

    return (
        <td>
            <div
                className="cell__connect4"
                onClick={() => {
                    play(columnIndex);
                }}
            >
                <div className={color}> </div>
            </div>
        </td>
    );
};

export default Connect4;