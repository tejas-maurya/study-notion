const mongoose = require('mongoose');
const OTPSchema = new mongoose.Schema({
    email:{
        type:String, 
        required:true
    },
    otp:{type:string ,
        required:true
    },
    createdAt:{
        type:Date,
        Default:Date.now(),
        expire:300
    }
});
module.exports = mongoose.model('OTP',OTPSchema);