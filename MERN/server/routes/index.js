const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Message = require("../models/Message")
const NewsMessage = require("../models/News")
const uploadCloud = require('../configs/cloudinary')
const Users = require("../models/User")


router.post("/sendMessage", isLoggedIn, (req, res, next) => {
  let message = new Message(req.body)
  message.officer = req.user.officer
  message.writer = req.user._id 


  message.save((err, mes)=>{
    res.json({user:req.user, mes:mes})
  })
})

router.get('/getMessages', (req,res,next) =>{
  Message.find().populate('writer').then(messagesFromDatabase=>{
    res.json({messages:messagesFromDatabase})
  })
})
// .populate('writer').populate('userId')


router.get('/allUsers', (req, res, next) => {
  Users.find().then(allTheUsers => {
    res.json({allTheUsers})
  })
})



router.post("/sendNews",(req, res, next)=>{
 let NewsMes = new NewsMessage(req.body)
 const userId = req.user._id
 NewsMes.save((err,mes)=>{
   res.json({
     user:req.user, mes:mes, userId:userId
    })
 })
})

router.get('/getNews', (req, res, next) =>{
  NewsMessage.find().then(messagesFromDatabase=>{
      res.json({messages:messagesFromDatabase})
  })
})




router.post('/savePhoto', uploadCloud.single('photo'), (req, res, next) => {

  console.log("UPLOAD PHOTO", req.file)
  res.json({
    imgPath:req.file
  })

});



module.exports = router;
