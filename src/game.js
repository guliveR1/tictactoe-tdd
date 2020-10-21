class Game {
    constructor() {
        this.board = new Array(9).fill(null);
        this.currToken = 'X';
    }

    getToken() {
        const token = this.currToken;
        this.currToken = token === 'X' ? 'O' : 'X';

        return token;
    }

    markCell(cellNum) {
        if (cellNum < 0 || cellNum > 9) {
            throw Error('Cell out of bounds.');
        }

        if (this.board[cellNum] === null) {
            this.board[cellNum] = this.getToken();

            const result = this.checkResult();
            if (result !== '') console.log(this.checkResult());
        }
    }

    lineEqual(line) {
        return this.board[line[0]] === this.board[line[1]] && 
            this.board[line[1]] === this.board[line[2]];
    }

    boardFull() {
        for (let cell of this.board) {
            if (cell === null) {
                return false;
            }
        }

        return true;
    }

    checkResult() {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let result = '';

        for (const line of winningLines) {
            if (this.lineEqual(line) && this.board[line[0]] !== null) {
                result = this.board[line[0]] + ' won!';
            }
        }

        if (result === '' && this.boardFull()) {
            result = 'draw!';
        }

        return result;
    }
}

module.exports = Game;