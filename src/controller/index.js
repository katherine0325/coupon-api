class Index {
    constructor() {

    }

    index(ctx) {
        return ctx.body = 'coupon api is running';
    }
}

module.exports = new Index;