const Validator = require('node-input-validator');


module.exports.create = async (request, response, next) => {
    let validator = new Validator(request.body, {
        nome: 'required|string',
        terreno: 'required|string',
        clima: 'required|string',
    });

    if (!await validator.check()) {
        return response.status(400).send({message: validator.errors, status: 400, data: request.body});
    }
    next();

};

module.exports.id = async (request, response, next)=> {
    let validator = new Validator(request.params, {id: 'required|string',});
    if (!await validator.check()) {
        return response.status(400).send({message: validator.errors, status: 400, data: request.params});
    }
    next();

};

module.exports.nome = async (request, response, next) => {
    let validator = new Validator(request.params, {nome: 'required|string',});
    if (!await validator.check()) {
        return response.status(400).send({message: validator.errors, status: 400, data: request.params});
    }
    next();

};