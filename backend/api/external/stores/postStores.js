/* global GLOBAL */
module.exports.do = function (req, res, next) {
	var Store = GLOBAL.Objects.Store;
	var storesList = req.body.Stores;

	for (var i = 0; i < storesList.length; i++) {
		 Store.forge({ id: storesList[i].Id, name: storesList[i].Name }).save(null, {method: 'insert'}).then(function () {
			 console.log('new row');
		}).catch(function (error)
		{
			console.log(error);
			res.json({"Status":"ERROR", "RowId":storesList[i].Id});
		});		
		console.log('for');
	}
	
	 res.json({ "Status": "OK" });
};
