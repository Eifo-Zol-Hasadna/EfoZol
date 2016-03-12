module.exports.do = function (req, res, next) {

	//var Branche = GLOBAL.Objects.Branche;
	//var ProductPrice = GLOBAL.Objects.ProductPrice;
	var productsList = req.body.products;

	GLOBAL.Knex.from('ProductPrices').whereIn('productId', productsList).then(function (collection) {
		var groupedByBranche = collection.groupBy(function () { return this.branchId; });
        
        var haveingAllTheProducts=groupedByBranche.where(function(x){ return x.Items.length==productsList.length})

		var ordered = haveingAllTheProducts.orderBy(function () {
			return this.Items.sum(function () { return this.price.replace("$","").toInt() });
		});
		
		res.json(ordered[0]);
	});


}