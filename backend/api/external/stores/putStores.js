/* global GLOBAL */
module.exports.do = function (req, res, next) {

	var Store = GLOBAL.Objects.Store;
	var store = req.body.Store;
	
	Store.forge({ id: store.Id, name: store.Name }).save().then(function () {
		console.log('new row');
	}).catch(function (error) {
		console.log(error);
		res.json({ "Status": "ERROR", "RowId": store.Id });
	});
	console.log('for');
	res.json({ "Status": "OK" });
};
