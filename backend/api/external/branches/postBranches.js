
module.exports.do = function (req, res, next) {
    
    var pg = require("pg");
    
    var branches = req.body.Branches;
    
    var queryString = "";
    for (var i = 0; i < branches.length; i++) {
        
        queryString += "INSERT INTO \"Branches\"(\"Id\", \"Name\", \"StoreId\", \"Position\")" +
        "VALUES ({0}, '{1}',{2}, '{3}');".format(branches[i].Id , branches[i].Name , branches[i].StoreId , branches[i].Position);
    }
    
    console.log("qs=" + queryString);
    
   var conString = GLOBAL.Settings.connectionString;
    var client = new pg.Client(conString);
    
    client.connect();
    
    var query = client.query(queryString);
    
    query.on("end", function (result) {
        
        res.json({ "Status": "OK" });
    });
  
};


