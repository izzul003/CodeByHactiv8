const route = require('express').Router()
const Controller = require('../controllers')
const session = require('express-session')
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
        res.send(`<h1 style="text-align: center;">Anda Tidak Memiliki Hak Otorisasi</h1>`)
    }
}
route.use(checkLogin)
route.get('/course/show', (err,res)=>{
    res.send('show')
})

route.get('/course/add', Controller.addCourse)
route.post('/course/add', Controller.addCoursePost)
route.get('/course/:id/edit',(err,res)=>{
    res.send('editget')
})
route.post('/course/:id/edit',(err,res)=>{
    res.send('edit')
})



route.get('/course/logout', Controller.logout)
module.exports = route