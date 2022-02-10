// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { strictLeft } = require('sequelize/types/lib/operators');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {

  // does it need anything? Not sure what this really does ...
  
}

// set up fields and rules for Product model
Product.init(
  {
    // define columns  Alfredo's attempt

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        decimal: str.match(/^[-+]?[0-9]+\.[0-9]+$/)  // pretty sure this is wrong... 
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        num: isNaN()  // pretty sure this is wrong... 
      }
    },

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }     
    }

    // end Alfredo' attempt
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
