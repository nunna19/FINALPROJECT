const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({

  Title:String,
  Description:String,
  Image:String,
  userId: { //person where are sending the message to
    type: Schema.Types.ObjectId,  
    ref: "User"
  },
  officer: {
    type:Boolean,
    default: false
  },
  writer: { //person where are writing the message from
    type: Schema.Types.ObjectId,  
    ref: "User"
  }
},
 {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Message  = mongoose.model('Message', MessageSchema);
module.exports = Message;
