const { User, Course } = require('../models')
const fullName = require('../helpers/fullName')

class Controller {
    static home(req, res) {
        User.findAll({ include: [Course]})
            .then(users => res.render('users', { users, fullName}))
            .catch(err => res.send(err))
    }
}

module.exports = Controller