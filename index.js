const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shoon99:tpgns5804!@boilerplate.mf2w5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongoDB connected...'))
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})