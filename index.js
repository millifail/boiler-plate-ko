const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require('./models/User.js');
const config = require('./config/key');

// // application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// // application / json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongoDB connected...'))
.catch((err)=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 gg')
})

app.post('/register',(req,res)=>{
  //회원가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다

  //req.body  -> {id:"hello", pw:123}   이런 형식임   , body-parser가 있기에 가능한 것
  const user= new User(req.body)


  //save : mongoDB의 메서드  -> 정보들이 user모델에 저장이 된 것
  user.save((err,userInfo)=>{
    if(err) {return res.json({success:false,err}) }
    //status(200) -> 성공했다는 뜻
    return res.status(200).json({
      success:true,
    })
  })  

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})