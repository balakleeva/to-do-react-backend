const UserModel = require('../database/models/user_model')

exports.allTodos = function (req, res) {
    UserModel.findOne({username: req.body.user.username}, (err, user) => {
        if (err) {
            res.status(500).send(err)
        }

        res.status(200).json({todos: user.todos})
    })
};

exports.addTodo = function (req, res) {
    const data = req.body;

    UserModel.findOne({username: data.user.username}, (err, user) => {
        user.todos.push({text: data.text, isDone: false})

        user.save().then(() => {
            res.status(200).json({todos: user.todos})
        }).catch(err => {
            res.status(500).send(err)
        })
    })
};

exports.changeDone = function (req, res) {
    const data = req.body
    UserModel.findOne({username: data.user.username}, (err, user) => {
        if (err) {
            res.status(500).status(200)
        }

        for (let i = 0; i < user.todos.length; i++) {
            if (user.todos[i].id === req.params.id) {
                user.todos[i].isDone = !user.todos[i].isDone
            }
        }

        user.save().then(() => {
            res.status(200).json({todos: user.todos})
        }).catch(err => {
            res.status(500).send(err)
        })
    })
};

exports.deleteTodo = function (req, res) {
    const data = req.body

    UserModel.findOne({username: data.user.username}, (err, user) => {
        if (err) {
            res.status(500).send(err)
        }

        const newTodos = []
        for (let i = 0; i < user.todos.length; i++) {
            if (user.todos[i].id !== req.params.id) {
                newTodos.push(user.todos[i])
            }
        }
        user.todos = newTodos;

        user.save().then(() => {
            res.status(200).json({todos: user.todos})
        }).catch(err => {
            res.status(500).send(err)
        })
    })

};
