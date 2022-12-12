module.exports = (app) =>{
    const tutorials = require("../controllers/tutorial.controllers");

    var router = require("express").Router();

    router.get("/",tutorials.findAll);
    //get by ID
    router.get("/:id",tutorials.findOne)
    //update
    router.put("/:id",tutorials.update);
    
    router.post("/",tutorials.create)

    // delete a tutorials
    router.delete("/",tutorials.delete)



    app.use("/api/tutorials",router)
    
    
}