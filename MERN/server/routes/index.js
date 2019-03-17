const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Message = require("../models/Message")
const NewsMessage = require("../models/News")



router.post("/sendMessage", (req, res, next) => {
  let message = new Message(req.body)

  message.save((err, mes)=>{
    res.json({user:req.user, mes:mes})
  })
})

router.get('/getMessages', (req,res,next) =>{
  Message.find().then(messagesFromDatabase=>{
    res.json({messages:messagesFromDatabase})
  })
})







router.post("/sendNews",(req, res, next)=>{
 let NewsMes = new NewsMessage(req.body)

 NewsMes.save((err,mes)=>{
   res.json({user:req.user, mes:mes})
 })
})

router.get('/getNews', (req, res, next) =>{
  NewsMessage.find().then(messagesFromDatabase=>{
      res.json({messages:messagesFromDatabase})
  })
})


module.exports = router;
