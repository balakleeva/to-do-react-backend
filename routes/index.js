var express = require('express');
var router = express.Router();
const todoController = require('../controllers');

router.get('/todos', todoController.allTodos);
router.post('/add-todo', todoController.addTodo);
router.post('/todos/:id', todoController.changeDone);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;