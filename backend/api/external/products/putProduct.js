﻿
module.exports.do = function (req, res, next) {
    
    var pg = require("pg");

    var id=req.params.id;
	var item = req.body.Product;

    var queryString =  "UPDATE \"Products\" SET  \"Name\"='{1}' where \"Id\"={0}";

    queryString = queryString.format(id , item.Name   );

    console.log("qs=" + queryString);
    
   var conString = GLOBAL.Settings.connectionString;
    var client = new pg.Client(conString);
    
    client.connect();
    
    var query = client.query(queryString);
    
    query.on("end", function (result) {
        
        res.json({ "Status": "OK" });
    });
  
};

    
