const express = require("express");
const routes = express.Router();
const Todocontroller = require("../controllers/TodoConroller");

routes.get("/getTodo", Todocontroller.getTodos);
routes.post("/saveTodo", Todocontroller.saveTodo);
routes.patch("/editTodo", Todocontroller.EditTodo);
routes.delete("/deleteTodo", Todocontroller.deleteTodo);
module.exports = routes;
