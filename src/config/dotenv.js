const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4001;
const mongodbUrl = process.env.MONGO_UR;

module.exports = { port, mongodbUrl };
