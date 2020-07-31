const {User, Course} = require('../models')
const format = require('../helpers/currency')
class Controller {
    static show(req, res){
        Course.findAll({order : [['id','ASC']]})
        .then(data=>{
            res.render('courses', {data,format})
            
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showCourse(req, res){
        Course.findByPk(+req.params.id)
        .then((data)=>{
            res.render('showCourse', {data,format})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static addCourse(req, res){
        User.findOne({
            where: {
                id: +req.session.userId
            }
        })
        .then(user=>{
            res.render('addCourse',{user})
        })
        .catch(err=>{
            res.send('err')
        })
    }

    static addCoursePost(req, res){
        const {name, label, price} = req.body
        let newCourse = {
            name,
            label,
            price,
            // gambar
        }
        Course.create(newCourse)
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static editCourse(req, res){
        let course = null 
        Course.findByPk(+req.params.id)
        .then(data=>{
            course = data
            return User.findOne({
                where: {
                    id: +req.session.userId
                }
            })
        })
        .then((user)=>{
            res.render('editCourse', {course, user})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editCoursePost(req, res){
        const {name, label, price} = req.body
        let updateCourse = {
            name,
            label,
            price
        }
        Course.update(updateCourse,{
            where: {
                id: +req.params.id
            }
        })
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static deletCourse(req,res){
        Course.destroy({where : {
            id : +req.params.id
        }})
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static registrasiUser(req, res){
        res.render('form-registrasi')
    }

    static registrasiUserPost(req, res){
        let newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password
        }

        User.create(newUser)
        .then(()=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static login(req, res){
        res.render('login')
    }

    static loginPost(req, res){
        const {username, password} = req.body
        User.findOne({
            where: {
                username
            }
        })
        .then((user)=>{
            if (username == user.username && password == user.password) {
                req.session.role = user.role
                req.session.userId = user.id
                // res.send(`${req.session.role}`)                
                // res.send(`halo ${req.session.role}`)
                res.redirect('/')
            } else {
                res.send(`
                Username atau Password Anda Salah
                <a href="/user/login"> Kembali </a>
                `)
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/')
    }



}

module.exports =Controller