module.exports.do = function(req, res, next) {

    GLOBAL.Knex.from('ProductPrices')
        .select(['ProductPrices.price', 'Products.name as Product', 'Branches.name as Branche'])
        .innerJoin('Products', 'ProductPrices.productId', 'Products.id')
        .innerJoin('Branches', 'ProductPrices.branchId', 'Branches.id')
        .orderBy('Product', 'asc')
        .then(function(response) {
            res.json(response);
        });
};