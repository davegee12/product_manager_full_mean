var products = require('../controllers/controllers.js');

module.exports = function(app){
    app.get('/allProducts', (req, res) => products.index(req, res));
    app.get('/product/:id', (req, res) => products.show(req, res));
    app.post('/create', (req, res) => products.create(req, res));
    app.put('/update/product/:id', (req, res) => products.update(req, res));
    app.delete('/destroy/product/:id', (req, res) => products.destroy(req, res));
}