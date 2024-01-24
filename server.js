require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const Toy = require('./models/toy.js')
const Category = require('./models/category.js')
const DeletedToy = require('./models/deletedtoy.js')



app.set("view engine","jsx")
app.engine("jsx",require('express-react-views').createEngine())

app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use((req,res,next) => {
    next()
})
app.use('/public',express.static('public'))

mongoose.connect(process.env.MONGO_URI, {useNewURLParser:true,useUnifiedTopology:true});
mongoose.connection.once('open', () => {
    console.log("Mongo DB Connected")
})


app.get('/',(req,res) => {
    res.render("Home")
})

app.get('/addnewtoy',(req,res) => {

    Category.find({},(error,allCategory) => {
        res.render("AddToy",{
            category:allCategory
        })
    })
    
})


app.get('/showalltoys',(req,res) => {
    Toy.find({},(error,alltoys) => {
        res.render("ShowAllToys",{
            toys : alltoys
        })
    })
})

app.get('/showalltoys',(req,res) => {
    res.render("ShowAllToys")
})

app.post('/showalltoys',(req,res) => {
    //console.log(req.body)
    Toy.create(req.body,() => {
        res.redirect('/showalltoys')
    })
})

app.get('/edittoy/:id', async(req,res) => {
    const foundtoy = await Toy.findById(req.params.id)
    Category.find({},(error,allCategory) => {
        res.render("Edit",{
            category:allCategory,
            toy:foundtoy
        })
    })
 
})

app.put('/update/:id',(req,res) =>{
    Toy.findByIdAndUpdate(req.params.id,req.body,(err,updatedToy) => {
        res.redirect("/showalltoys")
})
})

async function retrieveToys(){
    const alltoys = await Toy.find({})
    return alltoys
}

async function filteredtoys(category,gender,age){
    const filttoys = await Toy.find({category:category,gender:gender,age:age})
    return filttoys
}

app.get('/searchtoy/',async (req,res) => {
    const resulttoys = await retrieveToys()
    Category.find({},(error,allCategory) => {
        res.render("SearchToy",{
            category:allCategory,
            alltoys:resulttoys
        })
    })
})

app.post('/searchtoy/search',async (req,res) => {
    //console.log(req.body.category)
    const filtertoys = await filteredtoys(req.body.category,req.body.gender,req.body.age)
    Category.find({},(error,allCategory) => {
        res.render("SearchToy",{
            category:allCategory,
            alltoys:filtertoys
        })
    })
})

app.delete('/deletetoy/:id',(req,res) => {
    Toy.findByIdAndDelete(req.params.id,(error,delToy) => {
        //console.log(delToy.name)
        DeletedToy.create({name:delToy.name,gender:delToy.gender,age:delToy.age,category:delToy.category,quantity:delToy.quantity},() => {
            console.log("Deleted toy added to database")
        })
        res.redirect("/showalltoys")
    })
})

app.get('/showalldeletedtoys',(req,res) => {
    DeletedToy.find({},(error,alldeletedtoys) => {
        res.render("DeletedToys",{
            deltoys : alldeletedtoys
        })
    })
})


app.listen('3000',(req,res) => {
    console.log("Server is up and Running at port 3000")
})