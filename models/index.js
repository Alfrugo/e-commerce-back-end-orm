// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// alfredo's attempt:

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'product_id'
})

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: ProductTag,
  as: 'product_tag',
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  trough: ProductTag,
  as: 'tag_product',  // this doesn't sound right... 
  foreignKey: 'product_id'
})

// end alfredo's attempt

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
