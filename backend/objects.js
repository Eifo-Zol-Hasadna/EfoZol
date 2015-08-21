
var Objects = {};
 Objects.Store = GLOBAL.Bookshelf.Model.extend({
    tableName: 'Stores'
});

 Objects.Branche = GLOBAL.Bookshelf.Model.extend({
    tableName: 'Branches'
 });

 Objects.Product = GLOBAL.Bookshelf.Model.extend({
    tableName: 'Products'
 });
 
 Objects.ProductPrice = GLOBAL.Bookshelf.Model.extend({
    tableName: 'ProductPrices'
 });
 
 Objects.User = GLOBAL.Bookshelf.Model.extend({
    tableName: 'Users'
 });
  
module.exports = Objects;
  
  
  