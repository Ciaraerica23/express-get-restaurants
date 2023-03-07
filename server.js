const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

    

app.get('/restaurants',async(req,res)=>{

        const found = await Restaurant.findAll()
        res.json(found)
        //res.send('hello')
      
}
)


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})