const UserModel = require('../database/models/user_model')
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

exports.userLogin = function (req, res) {
    const {username, password} = req.body

    UserModel.find({
        username,
    }).exec().then((user) => {
        if (!user[0]) {
            res.status(401)
        }

        if (passwordHash.verify(password, user[0].password)) {
            console.log('SUCCESS')

            const token = jwt.sign({
                    name: user[0].name,
                    username: user[0].username,
                    email: user[0].email,
                },
                'secretKey', {
                    expiresIn: "1h",
                })

            res.status(200).json({
                isLogin: true,
                token: token,
                userData: {
                    name: user[0].name,
                    username: user[0].username,
                    email: user[0].email,
                }
            })

        } else {
            res.send({status: 500})
            console.log('NOT SUCCESS')
        }
    }).catch(err => {
        res.send(err)
    })
}

exports.allUsers = function (req, res) {
    UserModel.find({}, (error, users) => {
        if (error) {
            res.send(error)
            console.log('ERROR WHILE ALL USERS')
        } else {
            res.status(200).json({
                data: users
            });
            console.log('ALL USERS')
        }
    }).catch(err => {
        res.send(err)
    })
    console.log('FETCHING')
}

exports.addUser = function (req, res) {

    const {name, email, username, password} = req.body

    const userData = {
        name,
        email,
        username,
        password: passwordHash.generate(password)
    }

    const user = new UserModel(userData);

    user.save()
        .then(() => {
            res.status(200).json(user)
            console.log('USERSAVED!!!')
        }).catch((err) => {
        res.status(500).send(err)
    });
};
