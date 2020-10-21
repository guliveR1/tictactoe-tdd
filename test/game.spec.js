const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sinon = require('sinon');
const expect = chai.expect;
const Game = require('../src/game');

describe('Game test', () => {
    let game;
    
    beforeEach(() => {
        game = new Game();
    });

    describe('markCell test', () => {
        it('mark cell 0 with X', () => {
            game.markCell(0);
    
            expect(game.board[0]).to.equal('X');
        });
    
        it('mark cell 0 with O', () => {
            game.markCell(0);
            game.markCell(1);
    
            expect(game.board[1]).to.equal('O');
        });
    
        it('dont mark cell', () => {
            game.markCell(0);
            game.markCell(0);
    
            expect(game.board[0]).to.equal('X');
        });
    
        it('throw error when cell out of bounds', () => {
            expect(() => game.markCell(10)).to.throw(Error, 'Cell out of bounds.');
        });
    
        it('call check result', () => {
            const spy = sinon.spy(game, 'checkResult');
    
            game.markCell(0);
    
            expect(spy).to.have.been.calledOnce;
        });
    
        it('call check result once', () => {
            const spy = sinon.spy(game, 'checkResult');
    
            game.markCell(0);
            game.markCell(0);
    
            expect(spy).to.have.been.calledOnce;  
        });
    });

    describe('checkResult test', () => {     
        it('return X won!', () => {
            game.markCell(0);
            game.markCell(5);
            game.markCell(1);
            game.markCell(6);
            game.markCell(2);

            expect(game.checkResult()).to.equal('X won!');
        });

        it('return O won!', () => {
            game.markCell(0);
            game.markCell(5);
            game.markCell(1);
            game.markCell(6);
            game.markCell(2);

            expect(game.checkResult()).to.equal('X won!');
        });

        it('return draw!', () => {
            game.markCell(0);
            game.markCell(5);
            game.markCell(1);
            game.markCell(6);
            game.markCell(2);

            expect(game.checkResult()).to.equal('X won!');
        });

        it('return empty string', () => {
            game.markCell(0);

            expect(game.checkResult()).to.equal('');
        });
    });
});
