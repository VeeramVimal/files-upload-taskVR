const { Schema, ObjectId, Modle } = require("../config/config");

const userSchema = new Schema({
    userID: ObjectId("users"),
    imageUrl: {
        type: String
    },
}, {
    collation: "profiles",
    timestamps: true
});

module.exports = User = module("profiles", userSchema)