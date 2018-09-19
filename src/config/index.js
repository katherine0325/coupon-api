require('dotenv').config();

module.exports = {
    host: process.env.HOST,
    port: process.env.PORT,
    jwtKey: process.env.JWT_KEY,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        name: process.env.MONGO_NAME,
    }
};