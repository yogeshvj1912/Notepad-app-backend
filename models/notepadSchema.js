const mongoose = require("mongoose")
const userdb = require("./userSchema")

const notepadSchema = new mongoose.Schema({
    
    heading:{
        type:String
    },
    messages:{
        type:String
    },userId:{
   type:mongoose.Schema.Types.ObjectId,
   ref: "userdb" 
    }
})


const notepad = new mongoose.model("notes",notepadSchema);
module.exports = notepad;