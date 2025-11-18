const express = require("express");

const router = express.Router();

const { createTodo, getAllTodo, getTodoById, deleteTodoById, updateTodoById } = require("../controller/todo");

router.post("/todo/createtodo", createTodo);
router.get("/todos", getAllTodo);
router.get("/todo/:id", getTodoById);
router.put("/todo/update/:id", updateTodoById);
router.delete("/todo/delete/:id", deleteTodoById);

module.exports = router;
