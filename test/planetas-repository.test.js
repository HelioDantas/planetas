const {ok, deepEqual} = require('assert');
const config = require('./index');
config();
const planets = new (require('../src/app/model/repository/planetas-repository'))();


describe('Teste!', function () {


    it('buscar', async () => {
        const expected = {}
        const result = await planets.store();
        ok(expected, result);
    });


});