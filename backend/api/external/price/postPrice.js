module.exports.do = function (req, res, next) {
	var pg = require("pg");

	var client = new pg.Client(GLOBAL.Settings.connectionString);
	client.connect();
	var prices = req.body.Prices;

	var qs = "";
	for (var i = 0; i < prices.length; i++) {
		var price = prices[i];
		var q1 = "WITH upsert AS ( UPDATE \"ProductPrices\" SET \"price\"={2} WHERE \"productId\"={0} and \"branchId\"={1} RETURNING *)";
		var q2 = "INSERT INTO \"ProductPrices\" (\"productId\", \"branchId\",\"price\") SELECT {0},{1},{2} WHERE NOT EXISTS (SELECT * FROM upsert);";

		q1 = q1.format(price.ProductId, price.BranchId, price.Price);
		q2 = q2.format(price.ProductId, price.BranchId, price.Price);

		qs += q1 + q2;
		
	}
	var query = client.query(qs);
    query.on("end", function (result) {
        res.json({ "Status": "OK" });
    });

};

      
    