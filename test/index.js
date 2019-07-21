const {ok} = require('assert');
const {config} = require('dotenv');
const {join} = require('path');

module.exports = function () {
    const env = process.env.NODE_ENV || "dev"
    ok(env === "prod" || env === "dev", "a env é invalida");

    const configPath = join(__dirname, '../src/config', `.env.${env}`);
    config({
        path: configPath
    });

}