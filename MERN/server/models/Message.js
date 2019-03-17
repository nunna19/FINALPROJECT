const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({

  Title:String,
  Description:String,
  Image:String,
  userId: {
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
