const planetaSerivce = require('../model/service/planetas-service');

class PlanetasController {

    async create(request, response, next) {
        try {
            const {body} = request;
            const planeta = await planetaSerivce.create(body);
            response.status(200).send(planeta);
        } catch (e) {
            next(e);
        }
    }

    async store(request, response, next) {
        try {
            const {query} = request;
            const planetas = await planetaSerivce.store(query);
            response.status(200).send(planetas);
        } catch (e) {
            next(e);
        }
    }

    async findId(request, response, next) {
        try {
            const {id} = request.params;
            const planeta = await planetaSerivce.findId(id);
            response.status(200).send(planeta);
        } catch (e) {
            next(e);
        }
    }

    async findName(request, response, next) {
        try {
            const {nome} = request.params;
            const planeta = await planetaSerivce.findName(nome);
            response.status(200).send(planeta);
        } catch (e) {
            next(e);
        }

    }

    async delete(request, response, next) {
        try {
            const {id} = request.params;
            const result = await planetaSerivce.delete(id);
            response.status(200).send(result);
        } catch (e) {
            next(e);
        }
    }

    async update(request, response) {

    }


}


module.exports = PlanetasController;