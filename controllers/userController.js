// const User = require('../model/userModel');

// module.exports = {
//     addUser: async (req,res) => {
//         let user = new User({
//             username: req.body.username,
//             password: req.body.password
//         });
//         // save to database
//         user.save();

//     },

//     select: async (req,res) => {
//         let user =  await User.find()
//         console.log(user)
//     }
// }