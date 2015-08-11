
module.exports.do = function (req, res, next) {

    var pg = require("pg");

    var products = req.body.Products;

    var queryString = "";
    for (var i = 0; i < products.length; i++) {

        queryString += "INSERT INTO \"Products\"(\"Id\", \"Name\")VALUES({0}, '{1}');".format(+products[i].Id, products[i].Name);
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

    
