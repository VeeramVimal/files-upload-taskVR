const Mongoose = require("mongoose");
const model = Mongoose.model;
const schema = Mongoose.Schema;
const ObjectId = Mongoose.Schema.Types.ObjectId;
const path = require("path");


module.exports = {
  PORT: 8000,
  mongodburl:"mongodb+srv://VimalRaj:ThalaVR003@cluster0.1b2f5.mongodb.net/mongo_demo_1",
  Schema: schema,
  Modle: model,
  ObjectId,
};

// mongodb+srv://VimalRaj:*****@cluster0.1b2f5.mongodb.net/mongo_demo_1

// mongodb+srv://Demo_db:HrJ9fHIP5PtKtHIc@cluster0.wu8eb.mongodb.net/task_vr?retryWrites=true&w=majority