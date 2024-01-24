const mongoose = require("mongoose")

const ageSchema =  mongoose.Schema({
    number : {type:Number}
})

const Age = mongoose.model("Age",ageSchema)


module.exports = Age;