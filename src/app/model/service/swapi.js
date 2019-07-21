const {get} = require('axios');

const URL = `https://swapi.co/api/planets`;

const obterAparicoes = async (nome) => {
    const url = `${URL}/?search=${nome}&format=json`;
    const result = await get(url);
    const [results] = result.data.results;
    if (typeof results === 'undefined') {
        return 0;
    }
    const {films} = results;
    return films.length;

};

module.exports = {
    obterAparicoes
};