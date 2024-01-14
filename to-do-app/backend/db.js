const mongoose = require('mongoose');   

mongoose.connect("mongodb+srv://arpit:arpit@cluster0.qxvmuoe.mongodb.net/todo")
const todoSchema= new mongoose.Schema({
    title:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    completed:{
        type:Boolean,
        
    }
});

const todo = mongoose.model("todos",todoSchema);

module.exports = todo;