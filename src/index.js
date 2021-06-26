const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const port=process.env.PORT || 3000
const app = express()



// app.use((req,res,next)=>{
// if(req.method==="GET"||req.method==="POST"){
//     res.status(502).send("on maintance")
// }
// else{
//     next();
// }

// }),
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port)

// const main=async ()=>{
// const user=await User.findById('60ceb3957cd69a214c5a658e')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks)



// }
// main()

// const jwt =require('jsonwebtoken');
// const myfunction=async()=>{
// const token=jwt.sign({_id:'abxs34'},'hiisexy',{expiresIn:'7 days'})
// console.log(token)
// const date =jwt.verify(token,'hiisexy')
// }
// myfunction();

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction() 