module.exports.do = function (req, res, next) {
  var pg = require("pg");

  var client = new pg.Client(GLOBAL.Settings.connectionString);
  client.connect();

  var queryString = "SELECT b.\"Id\" as \"Id\", b.\"Name\" as \"BrancheName\", b.\"StoreId\" as \"StoreID\"," +
    "b.\"Position\" as \"Position\",s.\"Name\" as \"StoreName\" FROM \"Branches\" b join \"Stores\"  s on b.\"StoreId\" =s.\"Id\" ";

  client.query(queryString, function (err, result) {
    var items = result.rows.map(function (item) {
      return {
        id: item.Id,
        name: item.BrancheName,
        store: {
          id: item.StoreID,
          name: item.StoreName
        },
        position: item.Position,
      };
    });

    res.json(items);
    return;
  });
};
