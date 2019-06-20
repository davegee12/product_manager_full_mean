var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "A product needs a title"], minlength: [3, "A title must be 3 characters or more"], maxlength: [20, "TOO LONG OF A TITLE... zzzzzzzzz"]},
    price: {type: Number, required: [true, "It can't be free!!!"]},
    url: {type: String, required: [true, "What does it look like?"]},
}, {timestamps: true});


module.exports = mongoose.model('Product', ProductSchema);
const Product = mongoose.model('Product');