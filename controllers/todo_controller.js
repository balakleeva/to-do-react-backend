const TodoModel = require('../database/models/todo_model');
const UserModel = require('../database/models/user_model')

exports.allTodos = function (req, res) {
    TodoModel.find({}, (error, todos) => {
        if (error) {
            res.send(error);
            console.log('ERROR!!!!!')
        } else {
            res.status(200).json({
                data: todos
            });
            console.log('WORKS!!!!')
        }
    })
};

exports.addTodo = function (req, res) {
    const data = req.body;
    UserModel.find({username: data.username}).exec().then(user => {

    })
    //
    // const todo = new TodoModel({
    //     text: data.text,
    //     isDone: false,
    // });
    //
    // todo.save()
    //     .then(() => {
    //         res.status(200).json(todo)
    //         console.log('SAVED!!!')
    //     }).catch((err) => {
    //     res.status(500).send(err)
    // });
};

exports.changeDone = function (req, res) {
    TodoModel.findOne({_id: req.params.id}, (error, todo) => {
        if (error) {
            res.status(500).send(error)
        } else {
            todo.isDone = !todo.isDone
            todo.save()
                .then(() => {
                    res.status(200).json(todo)
                    console.log('CHANGED!')
                }).catch(err => {
                res.status(500).send(err)
                console.log('ERROR IN CHANGING')
            })
        }
    })
};

exports.deleteTodo = function (req, res) {
    TodoModel.deleteOne({
        _id: req.params.id,
    }).then(todo => {
        if (todo) {
            res.sendStatus(200);
            console.log('DELETED!')
        } else {
            res.sendStatus(500);
            console.log('ERROR IN DELETING')
        }
    });
};
