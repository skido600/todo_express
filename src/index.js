const express = require("express");
const { port } = require("./config/dotenv");
const dbconnect = require("./config/dbconect");
const cors = require("cors");
const TodoRoutes = require("./routes/todoroute");
const cronRoutes = require("./routes/keepAliveroute");
const { crobfunction } = require("./config/cron");

dbconnect();

const server = express();
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));

server.use("/todo", TodoRoutes);
server.use("/api", cronRoutes);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
  crobfunction();
});
