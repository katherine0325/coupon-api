const moment = require('moment');
const listM = require('../schema/list');

class List {
    constructor() {

    }

    async getList(ctx) {
        return await listM.find({});
    }

    async createList(ctx) {
        const data = await listM.findOne({}, {_id: 1})
                                .sort({coupon_tao_token: 1, create_time: 1})
                                .exec();

        await listM.deleteOne({_id: data._id});
        await listM.create(ctx.request.body);
        return {code: 1, data: 'success'};
    }
}

module.exports = new List;