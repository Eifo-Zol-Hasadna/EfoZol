
module.exports.do = function (req, res, next) {
    
    var pg = require("pg");
    
    var id=req.params.id;
	var Branche = req.body.Branche;

    var queryString = "UPDATE \"Branches\"  SET  \"Name\"='{1}', \"StoreId\"={2}, \"Position\"='{3}' WHERE \"Id\"={0};";

     queryString=queryString.format(id , Branche.Name , Branche.StoreId , Branche.Position);

    console.log("qs=" + queryString);
    
    var conString = GLOBAL.Settings.connectionString;
    var client = new pg.Client(conString);
    
    client.connect();
    
    var query = client.query(queryString);
    
    query.on("end", function (result) {
        
        res.json({ "Status": "OK" });
    });
  
};


