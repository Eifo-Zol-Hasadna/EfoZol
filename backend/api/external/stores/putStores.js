/* global GLOBAL */
module.exports.do = function (req, res, next) {

	var pg = require("pg");

	var id=req.params.id;
	var store = req.body.Store;

	var queryString = "UPDATE \"Stores\" SET  \"Name\"='{0}' where \"Id\"={1};";
	queryString = queryString.format(store.Name , id);
	
	console.log("qs=" + queryString);
	
	var conString = GLOBAL.Settings.connectionString;
	var client = new pg.Client(conString);
	
	client.connect();

	var query = client.query(queryString);
	
	query.on("end", function (result) {
		
		res.json({"Status":"OK"});
	});
  
};
