const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;
const sinon = require('sinon');
const Game = require('../src/game');

describe('Acceptance test', () => {
    beforeEach(() => {
        sinon.stub(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('X should win the game', () => {
        const game = new Game();

        game.markCell(0);
        game.markCell(5);
        game.markCell(1);
        game.markCell(6);
        game.markCell(2);

        expect(console.log).to.have.been.calledWith('X won!');
    });
});
