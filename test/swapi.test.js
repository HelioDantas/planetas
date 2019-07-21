const {ok, deepEqual} = require('assert');
const config = require('./index');
config();
const {obterAparicoes} = require('../src/app/model/service/swapi');


describe('Teste!', function () {


    it('buscar Alderaan', async () => {
        const expected = 2;
        const result = await obterAparicoes('Alderaan');
        deepEqual(expected, result);
    });

    it('buscar Yavin IV', async () => {
        const expected = 1;
        const result = await obterAparicoes('Yavin IV');
        deepEqual(expected, result);
    });

    it('buscar nada', async () => {
        const expected = 0;
        const result = await obterAparicoes('Yavin xczxcIV');
        deepEqual(expected, result);
    });
});