const {ok, deepEqual} = require('assert');
const {config} = require('dotenv');
const {join} = require('path');
const env = process.env.NODE_ENV || "dev"
ok(env === "prod" || env === "dev", "a env é invalida");

const configPath = join(__dirname, '../src/config', `.env.${env}`);
config({
    path: configPath
});
const Bank = require('../src/app/model/model/planetas');
const banco = new Bank();
const PLANETA_DEFAULT = {nome: 'terra', clima: 'arido', terreno: 'alto'};

describe('Teste!', function () {
    this.beforeAll(async () => {
        await banco._connect();
    });

    it('Conectar', async () => {
        const expected = true;
        const result = banco;
        // console.log(banco);
        ok(expected, result);
    })

    it('Create', async () => {
        const expected = PLANETA_DEFAULT;
        const {nome, clima, terreno} = await banco.create(PLANETA_DEFAULT);
        const result = {nome, clima, terreno};

        deepEqual(expected, result);
    })
    it('Lista', async () => {
        const expected = PLANETA_DEFAULT;
        const [{nome, clima, terreno}] = await banco.read({nome: 'terra'});
        const result = {nome, clima, terreno};
        deepEqual(expected, result);
    })

    it('delete', async () => {
        const expected = {};
        const result = await banco.delete('5d34a06d66054d06f4c3c38d');
        ok(expected, result);
    })
});