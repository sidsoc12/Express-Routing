const express = require("express")
const router = express.Router()

router.get('/', (req,res) => 
{
    res.send("User Post")
})

router.get('/new', (req,res) => {
    res.send("User New Post")
})

module.exports = router;