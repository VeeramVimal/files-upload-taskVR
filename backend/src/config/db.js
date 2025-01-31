const Mongoose = require("mongoose");
const Config = require("./config");
console.log("Config.mongodburl===============", Config.mongodburl);

Mongoose.connect(Config.mongodburl, {  useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("DB is connected successfully"))
.catch((err) => console.log("DB is not connected its err: ", err));


