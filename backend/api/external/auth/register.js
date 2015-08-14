module.exports.do = function (req, res, next) {

	var pg = require("pg");
	var jwt = require('jsonwebtoken');

	var token = req.headers['access-token'];

	if (!token || token !== GLOBAL.Settings.adminHeader) {
		return res.status(403).send({
			success: false,
			message: 'Failed to authenticate token.'
        });
	}

var client = new pg.Client(GLOBAL.Settings.connectionString);
client.connect();
	
	var userName = req.body.UserName;
	var password = req.body.Password;
	var query = "INSERT INTO \"Users\"(\"UserName\", \"Password\", \"IsAdmin\")  VALUES ( '{0}', '{1}', true);  SELECT LASTVAL();";
	query = query.format(userName, password);

	client.query(query, function (err, result) {

		var row = result.rows[0];
		var user = {
			Id: row.lastval,
			UserName: userName,
			Password: password,
			IsAdmin: true,
		};

		var token = jwt.sign(user, GLOBAL.Settings.secret, {
			expiresInMinutes: GLOBAL.Settings.tokenExpiresInMinutes
		});

		res.json({
			Status: true,
			Message: 'Enjoy your new user!',
			UserId: user.Id,
			Token: token
		});
		return;

	});
};