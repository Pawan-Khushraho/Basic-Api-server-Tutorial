const { tutorials } = require("../models");
const db = require("../models")
const Tutorial = db.tutorials;

// getting all the tutorials from DB

exports.findAll = (req,res)=>{
    //sequelize query
    Tutorial.findAll()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send("some error occurred while retrieving the data")
    })
}

exports.create = (req,res)=>{
    return tutorials.create({
        title: req.body.title,
        description: req.body.description
    })
    .then(data=>{
        res.send(data)
    })
}

exports.findOne = (req,res)=>{
    let id = req.params.id

    Tutorial.findByPk(id)
    .then(data=>{
        res.send(data)
    })
} 


exports.update = (req,res)=>{
    let id = req.params.id

    Tutorial.update(req.body,{
        where: {id:id}
    }) .then(()=>{
        res.send({success:true})
    })

}

exports.delete = (req,res)=>{
    let id = req.params.id

    Tutorial.delete(id)
    .then((data) => {
        if (data == 1) {
            res.status(200).send("deleted successfully")
        }
    }).catch((err) => {
        res.status(500).send("something went wrong",err)
    });
}