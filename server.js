const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));   

app.get('/restaurants/:id',async(req,res)=>{
    const id= req.params.id
    const found = await Restaurant.findByPk(id)
    res.json(found)
      
      
}
)

app.get('/restaurants',async(req,res)=>{
    const found = await Restaurant.findAll()
    res.json(found)
      
      
})
app.post('/restaurants',async(req,res)=>{
    await Restaurant.create({
    name:'Fridays',
    location:'Dover',
    cuisine:'appetizers'
    })
    const found = await Restaurant.findAll()
    res.json(found)
})

app.post('/restaurants/add',async(req,res)=>{
    await Restaurant.create(req.body)
    const found = await Restaurant.findAll()
    res.send(found)
})

app.delete('/restaurants/:id',async(req,res)=>{
    const id = req.params.id
    const find = await Restaurant.findByPk(id)
    await find.destroy()
    const found = await Restaurant.findAll()
    res.json(found)
})


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})