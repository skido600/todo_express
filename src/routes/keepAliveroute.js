const express = require("express");
const cronJob = require("../controllers/cronjob");

const routes = express.Router();

routes.get("/keep-alive", cronJob.cronjob);

module.exports = routes;
