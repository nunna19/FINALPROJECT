const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String, /// going to be a room number
  password: String,
  firstName: String, 
  lastName: String,
  officer:{
    default: false,
    type: Boolean
  },
},
 {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
