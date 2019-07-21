const planeta = new (require('../model/planetas'))();


class PlanetasRepository {

    constructor() {
        planeta._connect();
    }

    async create(body) {
        return await planeta.create(body);
    }

    async store(query, skip = 0, limit = 10) {
        return await planeta.read(query, skip, limit);
    }

    async findName(name) {
        return await planeta.read({nome: name});
    }


    async findId(id) {
        return await planeta.read({_id: id});
    }

    async delete(id) {
        return await planeta.delete(id);
    }

}

module.exports = PlanetasRepository;