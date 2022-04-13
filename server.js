const express = require('express')
const app = express()
app.use(express.static("public"))
// app.useLogger();
app.set("view engine", "ejs")
// app.get("/", logger, (req, res) => {
//     console.log('Here')
//     res.render("index", {text: 'World'})
//     // res.download('server.js')
//     // res.json({message: "Error"})  
// })
const userRouter = require('./routes/users')
const postRouter = require('./routes/post')
app.use('/users', userRouter)
app.use('/posts', postRouter)

function logger (req, res, next)
{
    console.log(req.originalUrl)
    next()
}
app.listen(3000)