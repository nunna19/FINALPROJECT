const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Message = require("../models/Message")
const NewsMessage = require("../models/News")

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
  Message.find().then(messagesFromDatabase=>{
    res.json({messages:messagesFromDatabase})
  })
})



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







module.exports = router;
