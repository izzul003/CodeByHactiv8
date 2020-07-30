const route = require('express').Router()
const Controller = require('../controllers')

route.get('/', (err,res)=>{
    res.send('Rencana tampilan semua course')   
})

route.get('/add', Controller.addCourse)

module.exports = route