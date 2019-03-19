const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({

  Title:String,
  Description:String,
  Image:String,
},
 {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const NewsMessage  = mongoose.model('NewsMessage', NewsSchema);
module.exports = NewsMessage;