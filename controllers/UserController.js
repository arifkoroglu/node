const User = require('../models/User');
const faker = require('faker');
 
exports.index = (req,res,next)=> {
    User.find()
    .then(users=>{
        res.json({
           payload:users,
           error:false,
           message:'All user'
        })
    });
}

exports.show = (req,res,next)=> {
    const user_id = req.params.user_id;
    User.findById(user_id)
    .then(user=>{
        res.json({
           payload:user,
           error:false,
           message:'user detail'
        })
    });
}

exports.store = async (req,res,next) => {
    const user = new User({
        name : faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        password :faker.internet.password()
    });
    await user.save();
    res.redirect('/');
};