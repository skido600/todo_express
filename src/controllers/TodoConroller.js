const Todo = require("../models/Todoschema");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.saveTodo = async (req, res) => {
  const { task } = req.body;

  try {
    const data = await Todo.create({ task });
    console.log("Todo saved");
    res.status(201).json({ message: "Successfully saved todo", data });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.EditTodo = async (req, res) => {
  const { _id, task } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(_id, { task });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(201).json({ message: "updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(_id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found with this ID" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
