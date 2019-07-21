const express = require('express');
const {config} = require('dotenv');
const logger = require('morgan');
const {ok, deepEqual} = require('assert');
const {join} = require('path');
const env = process.env.NODE_ENV || "dev"
ok(env === "prod" || env === "dev", "a env é invalida");

const configPath = join(__dirname, './src/config', `.env.${env}`);
config({
    path: configPath
});

const indexRouter = require('./src/routes/index');
const planetasRouter = require('./src/routes/planetas');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', indexRouter);
app.use('/planetas', planetasRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.status(err.status).send({
            message: err.message,
            error: err
        });
    });
}
app.use((err, req, res, next) => {
    console.log(req.app.get('env'));
    err.message = req.app.get('env') === 'development' ? err.message : 'erro';
    err.err = req.app.get('env') === 'development' ? err.err : {};

    const status = (err.status || 500);
    console.log(status);
    res.status(status).send({
        message: err.message,
        error: err
    });
});

module.exports = app;
