const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

const db = require("./app/models")
db.sequelize.sync()
    .then(() => {
        console.log("synced db")
    }).catch((err) => {
        console.log("failed to sync DB"+ err.message)
    });


require("./app/routes/tutorial.routes")(app)


app.get("/",(req,res)=>{
    res.json({message: "Welcome to the application.",
    success:true})
        
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}.`)
})
