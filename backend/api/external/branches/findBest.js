module.exports.do = function(req, res, next) {
    var productsList = req.body.products;

    GLOBAL.Knex.from('ProductPrices').select(['ProductPrices.productId',
        'ProductPrices.branchId',
        'ProductPrices.price',
        'Products.name as Product',
        'Branches.name as Branche'])
        .innerJoin('Products', 'ProductPrices.productId', 'Products.id')
        .innerJoin('Branches', 'ProductPrices.branchId', 'Branches.id')
        .whereIn('ProductPrices.productId', productsList).then(function(collection) {
            var groupedByBranche = collection.groupBy(function() { return this.branchId; });
            var haveingAllTheProducts = groupedByBranche.where(function(x) { return x.Items.length == productsList.length })
            var ordered = haveingAllTheProducts.orderBy(function() {
                return this.Items.sum(function() { return this.price.replace("$", "").toInt() });
            });

            var bestPricedBranche = ordered[0];
            res.json({
                BrancheName: bestPricedBranche.Items[0].Branche,
                Products: bestPricedBranche.Items.select(function(x) { return { Product: x.Product, Price: x.price }; })
            });
        });
}