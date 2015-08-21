
module.exports.do = function (req, res, next) {

	var Product = GLOBAL.Objects.Product;
	var id = req.params.id;
	var item = req.body.Product;

	Product.forge({
		id: id,
		name: item.Name
			 }).save().then(function () {
		console.log('new row');
	}).catch(function (error) {
		console.log(error);
		res.json({ "Status": "ERROR", "RowId": id });
	});
	console.log('for');
    res.json({ "Status": "OK" });


};

    
