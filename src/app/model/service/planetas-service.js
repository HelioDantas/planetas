const planeta = new (require('../repository/planetas-repository'))();


class PlanetasService {


    static async  create(body) {
        return await planeta.create(body);
    }

    static async store(query, skip = 0, limit = 1000) {
        return await planeta.store(query, skip, limit);

    }

    static async findName(name) {
        return await planeta.findName(name);
    }


    static async  findId(id) {
        return await planeta.findId(id);
    }

    static async  delete(id) {
        return await planeta.delete(id);
    }
}

module.exports = PlanetasService;