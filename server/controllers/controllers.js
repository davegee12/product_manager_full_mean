var mongoose = require('mongoose');
require('../models/models.js');

const Product = mongoose.model('Product');


module.exports={
    index: (req, res) => {
        Product.find({}).sort({name: -1}).exec( (err, result) => {
            if(err){
                res.json({message: "Failed!", error: err})
            }
            else{
                res.json({message: "Success!", result: result})
            }
        })
    },
    show: (req, res) => {
        Product.findById(req.params.id, (err, author) => {
            if(err){
                res.json({message: "Failed!", error: err})
            }
            else{
                res.json({message: "Success!", result: author})
            }
        })
    },
    create: (req, res) => {
        console.log("POST DATA", req.body);
        Product.create(req.body, (err, result) => {
            if (err){
                res.json({message: "Failed!", error: err.errors})
            }
            else{
                res.json({message: "Success!", result: result});
            }
        })
    },
    update: (req, res) => {
        console.log(req.body);
        Product.findByIdAndUpdate({_id: req.params.id},{$set: req.body}, (err, result) => {
            if(err){
                res.json({message: "Failed!", error: err.errors});
            }
            else{
                res.json({message: "Success!", result: result});
            }
        })
    },
    destroy: (req, res) => {
        Product.remove({_id: req.params.id}, (err, result) => {
            if (err){
                res.json({message: "Failed!", error: err})
            }
            else{
                res.json({message: "Success!", result: result});
            }
        })
    },
}