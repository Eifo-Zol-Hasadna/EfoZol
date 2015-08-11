/* global GLOBAL */
module.exports.do = function (req, res, next) {

  var pg = require("pg");
  var jwt = require('jsonwebtoken');
  var client = new pg.Client(GLOBAL.Settings.connectionString);
  client.connect();
  var userName = req.body.UserName;
  var password = req.body.Password;

  //var user = getUserByName(userName, client);
  var getUserByUserName = "select * from \"Users\" where \"UserName\"='{0}';".format(userName);
	 var query = client.query(getUserByUserName, function (err, result) {

    if (result.rowCount === 0 || err) {
      res.json({ Status: false, Message: 'Wrong user or password.' });
      return;
    }

    var row = result.rows[0];
    var user = {
      Id: row.Id,
      UserName: row.UserName,
      Password: row.Password,
      IsAdmin: row.IsAdmin,
    };

    if (user.Password !== password) {
      res.json({ Status: false, Message: 'Wrong user or password.' });
      return;
    }

    var token = jwt.sign(user, GLOBAL.Settings.secret, {
      expiresInMinutes: GLOBAL.Settings.tokenExpiresInMinutes
    });

    res.json({
      Status: true,
      Message: 'Enjoy your token!',
      UserId: user.Id,
      Token: token
    });
    return;
  });
};

