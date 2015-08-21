
module.exports.do = function (req, res, next) {
  
  var Branche = GLOBAL.Objects.Branche;
    var id=req.params.id;
	var branche = req.body.Branche;

	Branche.forge({
			id: id,
			name: branche.Name,
			storeId: branche.StoreId,				 										
			position: branche.Position }).save().then(function () {
		console.log('new row');
	}).catch(function (error) {
		console.log(error);
		res.json({ "Status": "ERROR", "RowId": id });
	});
	console.log('for');
	res.json({ "Status": "OK" });
  
};


