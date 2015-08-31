module.exports.do = function (req, res, next) {

	//var Branche = GLOBAL.Objects.Branche;
	//var ProductPrice = GLOBAL.Objects.ProductPrice;
	var items = req.body.products;

	GLOBAL.Knex.from('ProductPrices').whereIn('productId', items).then(function (collection) {
		var grouped = collection.groupBy(function () { return this.branchId; });

		var ordered = grouped.orderBy(function () {
			return this.Items.sum(function () { return this.price });
		});
		
		res.json(ordered[0]);
	});


}