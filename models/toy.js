const mongoose = require("mongoose")

const toySchema = new mongoose.Schema({
    name : {type:String, required:true},
    category:{type:String,required:true},
    gender : {type:String, required:true},
    quantity:{type:String, required:true},
    age:{type:String, required:true}

})



const Toy = mongoose.model('Toy',toySchema)


module.exports = Toy