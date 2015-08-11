/* global GLOBAL */
module.exports.do = function (req, res, next) {

	var pg = require("pg");

	var stores = req.body.Stores;

	var queryString = "";
	for (var i = 0; i < stores.length; i++) {
		
		queryString += "INSERT INTO \"Stores\"(\"Id\", \"Name\") VALUES ( {0}, '{1}');".format(stores[i].Id , stores[i].Name);
	}
	
	console.log("qs=" + queryString);
	
	var conString = GLOBAL.Settings.connectionString;// ;
	var client = new pg.Client(conString);
	
	client.connect();

	var query = client.query(queryString);
	
	query.on("end", function (result) {
		
		res.json({"Status":"OK"});
	});
  
};
