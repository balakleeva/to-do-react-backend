var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todo_controller');
const userController = require('../controllers/user_controller');
const auth = require('../controllers/auth_controller');

router.get('/todos', auth, todoController.allTodos);
router.post('/add-todo', auth, todoController.addTodo);
router.post('/todos/:id', auth, todoController.changeDone);
router.delete('/todos/:id', auth, todoController.deleteTodo);

router.get('/all-users', userController.allUsers)
router.post('/add-user', userController.addUser)
router.post('/login', userController.userLogin)

module.exports = router;