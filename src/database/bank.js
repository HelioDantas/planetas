const Mongodb = require('mongoose');

class Bank {


    constructor() {
        this.model = null;
        this.name = null;

    }

    async create(item) {
        return await this._model.create(item);
    }

    async read(query, skip = 0, limit = 10) {
        return await this._model.find(query).skip(skip).limit(limit);
    }

    async delete(id) {
        return await this._model.deleteOne({_id: id})

    }

    update(item) {
        return this.database.create(item);
    }

    definirMoodel() {
        const model = new Mongodb.Schema(this.model);
        this._model = Mongodb.model(this.name, model)
    }

    _connect() {
        Mongodb.connect(process.env.BANK_URL, {useNewUrlParser: true}, (error) => {
            if (!error) {
                return true;
            }
            throw error.message;
        }).catch(error => console.error(error));

        this.database = Mongodb.connection;
        this.definirMoodel();
    }
}

module.exports = Bank;