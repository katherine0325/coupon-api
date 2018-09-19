const listM = require('../schema/list');

class List {
    constructor() {

    }

    async getList(ctx) {
        return await listM.find({});
    }
}

module.exports = new List;