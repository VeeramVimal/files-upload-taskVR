const { Schema, ObjectId, Modle } = require("../config/config");

const userSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collation: "users",
    timestamps: true
});

module.exports = User = Modle("users", userSchema)