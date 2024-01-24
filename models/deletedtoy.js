const mongoose = require("mongoose")

const deletedtoySchema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    gender : {type:String, required:true},
    quantity:{type:String, required:true},
    age:{type:String, required:true}
})

const DeletedToy = mongoose.model("DELTOY",deletedtoySchema)


module.exports = DeletedToy