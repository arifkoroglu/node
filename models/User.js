  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const user_schema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true,
    },
    image:   String,
    password:{
        type:String,
        required:true
    }
  });

  module.exports = mongoose.model('User',user_schema);