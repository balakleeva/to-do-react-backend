var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todo_controller');
const userController = require('../controllers/user_controller')

router.get('/todos', todoController.allTodos);
router.post('/add-todo', todoController.addTodo);
router.post('/todos/:id', todoController.changeDone);
router.delete('/todos/:id', todoController.deleteTodo);

router.get('/all-users', userController.allUsers)
router.post('/add-user', userController.addUser)
router.post('/login', userController.userLogin)

module.exports = router;