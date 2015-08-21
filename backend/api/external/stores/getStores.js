module.exports.do = function (req, res, next) {

  var Store = GLOBAL.Objects.Store;

  Store.fetchAll().then(function (collection) {
    res.json(collection);
  }).catch(function (error) {
    console.log(error);
    res.send('An error occured');
  });
 /* var Sequelize = require('sequelize');
var sequelize = new Sequelize(GLOBAL.Settings.SequelizeconnectionString);
var Store = sequelize.define('Stores', {
  Id: Sequelize.INTEGER,
  Name: Sequelize.DATE,
  timestamps: false,
});

Store.findAll().then(function(collection) {
  res.json(collection);
})
*/
};