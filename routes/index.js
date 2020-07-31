const route = require('express').Router()
const Controller = require('../controllers')
const session = require('express-session')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


route.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

route.use(session({
    secret: 'Login Use',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))



route.get('/', Controller.show)


route.get('/user/registrasi', Controller.registrasiUser)
route.post('/user/registrasi', Controller.registrasiUserPost)

route.get('/user/login', Controller.login)
route.post('/user/login', Controller.loginPost)

function checkLogin(req, res, next) {
    console.log(req.session.role);
    if(req.session.role == 'admin' || req.session.role == 'user'){
        next()
    } else {
        res.send(`<h1 style="text-align: center;">Anda Tidak Memiliki Hak Otorisasi</h1>
        <a href="/" style="text-align: center;"> Kembali </a>`)
    }
}
route.use(checkLogin)
route.get('/course/:id/show', Controller.showCourse)

route.get('/course/add', Controller.addCourse)
route.post('/course/add', Controller.addCoursePost)
route.get('/course/:id/edit',Controller.editCourse)
route.post('/course/:id/edit',Controller.editCoursePost)
route.get('/course/:id/delete',Controller.deletCourse)



route.get('/course/logout', Controller.logout)
module.exports = route