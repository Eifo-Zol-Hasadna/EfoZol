
module.exports.do = function (req, res, next) {
    
   var Branche = GLOBAL.Objects.Branche;
	var branches = req.body.Branches;

	for (var i = 0; i < branches.length; i++) {
		Branche.forge({
			id: branches[i].Id,
			name: branches[i].Name,
			storeId: branches[i].StoreId,				 										
			position: branches[i].Position
		}).save(null, { method: 'insert' }).then(function () {
			 console.log('new row');
		}).catch(function (error)
		{
			console.log(error);
			res.json({"Status":"ERROR", "RowId":branches[i].Id});
		});		
		console.log('for');
	}
	
	 res.json({ "Status": "OK" });
   

};


