module.exports.do = function (req, res, next) {

	var User = GLOBAL.Objects.User;
	var jwt = require('jsonwebtoken');

	var accessToken = req.headers['access-token'];

	if (!accessToken || accessToken !== GLOBAL.Settings.adminHeader) {
		return res.status(403).send({
			success: false,
			message: 'Failed to authenticate token.'
        });
	}

	var userName = req.body.UserName;
	var password = req.body.Password;

	User.forge({
		userName: userName,
		password: password,
		isAdmin: true
	}).save(null, { method: 'insert' }).then(function (model) {
		
		var user = {
			Id: model.attributes.id,
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
	}).catch(function (error) {
		console.log(error);
		res.json({ "Status": "ERROR" });
	});


};