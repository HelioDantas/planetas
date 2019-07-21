const model = require('../../../database/bank');
const {obterAparicoes} = require('../service/swapi');

class Planetas extends model {

    constructor() {
        super();
        this.name = 'planetas';
        this.model = {
            nome: {
                type: String,
                required: true
            },
            clima: {
                type: String,
                required: true
            },
            terreno: {
                type: String,
                required: true
            },
            aparicoes: {
                type: Number,
                required: true
            }
        }
    }

    async create(item) {

        const final = {
            ...item,
            aparicoes: await obterAparicoes(item.nome)
        };
        return super.create(final);
    }
}


module.exports = Planetas;