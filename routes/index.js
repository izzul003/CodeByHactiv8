const route = require('express').Router()
const usersRoute = require('./usersRoute')

route.get('/', (err,res)=>{
    res.send('Rencana tampilan semua course')   
})

route.use('/users', usersRoute)

module.exports = route