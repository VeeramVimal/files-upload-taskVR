const Users = require("../models/user.module");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const userCreate = async (req, res) => {
    try {
       const user = await Users.create(req.body);
       if(user) return res.send({ status: true, message: "user create success"})
    } catch (error) {
        res.send({ status:false, message: "something is err", error})
    }
}

const userLoginServices = async (userBody, res) => {
    const { email, password} = userBody;
    console.log("userBody===========", userBody);
//    const data = await Users.find({});
//    console.log("user===data=======", data);
return false;
    await Users.findOne({ email: userBody.email }).then((user) => {
        console.log("user==========", user);
        
        if(!user) return res.send({ status: false, message: "bad request or in valid email"})
        bcrypt.compare(password, user.password, (err, data) => {
            if(err) throw err;
            if(data) {
                let token = JWT.sign({
                    user_id: user._id
                }, 'secrete', { expiresIn: '1hr'});
                return res.send({ data: { user, token}})
            } else return res.send({ code: 401, message: "unauth"})
    })
    }).catch((err) => { res.send({ code: 404,  message: "something err", err})});
}
const userLogin = async (req, res) => {
    try {
        const data = await Users.find({});
   console.log("user===data=======", data);
        const users = await userLoginServices(req.body, res);
        if(!users) return res.send({ status: true, message: "user is not found"});
        return res.send({ status: true, message: "user login successfully", data: users});
    } catch (error) {
        res.send({ status:false, message: "something is err", error})
    }
}

module.exports = {
    userCreate,
    userLogin
}