module.exports.do = function (req, res, next) {
	var pg = require("pg");

	var client = new pg.Client(GLOBAL.Settings.connectionString);
	client.connect();
	var price = req.body.Price;

	var q1 = "WITH upsert AS ( UPDATE \"ProductPrices\" SET \"Price\"={2} WHERE \"ProductId\"={0} and \"BranchId\"={1} RETURNING *)";
	var q2 = "INSERT INTO \"ProductPrices\" (\"ProductId\", \"BranchId\",\"Price\") SELECT {0},{1},{2} WHERE NOT EXISTS (SELECT * FROM upsert);";

	q1 = q1.format(price.ProductId, price.BranchId ,price.Price );
	q2 = q2.format(price.ProductId, price.BranchId ,price.Price);

	var query = client.query(q1+q2);

    query.on("end", function (result) {
        res.json({ "Status": "OK" });
    });

};

      
    