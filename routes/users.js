const express = require("express")
const router = express.Router()

router.get('/', (req,res) => 
{
    res.send("User List")
})

router.get('/new', (req,res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send("Create user")
})

// router can take anything after /users
router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(req.params.id)
    res.send("User ID")
})

// router.route('/routing').get('/new', (req,res) => {
//     res.send("User New Form")
// }).put('/new', (req,res) => {
//     res.send("User New Form")
// }).delete('/new', (req,res) => {
//     res.send("User New Form")
// })

const users = [{name: "Sally"},{name: "Sally"}]
//param is middleware - between request from client and response back to client
//next moves out of middleware to responses
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(id)
    next()
})

module.exports = router;

