const mongoose = require("mongoose");
//schema for the database
const todolistSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

});

const todoList = mongoose.model("todoList", todolistSchema);

module.exports = todoList;