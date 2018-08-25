module.exports = function(sequelize, DataTypes) {
    var inventory = sequelize.define("inventory", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });

    Product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,100]
      }
    
    },
    inventory_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1,100]
    }

},
available_inventory: {
    type: DataTypes.INTEGER,
     allowNull: false,
    len: [1,100]
}

},
product_image: {
type: DataTypes.STRING,
 allowNull: false,
len: [1,100]
}

},
rentalPrice_day: {
type: DataTypes.Decimal,
 allowNull: false,
len: [10,4]
}
    });
  
    inventory.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      inventory.hasMany(models.rentals, {
        onDelete: "cascade"
      });
    };
  
    return inventory;
  };