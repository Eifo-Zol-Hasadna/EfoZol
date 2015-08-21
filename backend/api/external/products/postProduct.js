
module.exports.do = function (req, res, next) {

	var Product = GLOBAL.Objects.Product;
	var products = req.body.Products;

	for (var i = 0; i < products.length; i++) {
		Product.forge({
			id: products[i].Id,
			name: products[i].Name,
		}).save(null, { method: 'insert' }).then(function () {
			console.log('new row');
		}).catch(function (error) {
			console.log(error);
			res.json({ "Status": "ERROR", "RowId": products[i].Id });
		});
		console.log('for');
	}

	res.json({ "Status": "OK" });
};

    
