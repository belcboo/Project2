module.exports = function (sequelize, DataTypes) {
  var inventory = sequelize.define("inventory", {

    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    product_category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    inventory_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    available_inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    product_image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    rentalPrice_day: {
      type: DataTypes.Decimal,
      allowNull: false,
      validate: {
        len: [10, 4]
      }
    },

    product_vendor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    product_serialNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },

    product_warantyInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 1000]
      }
    },

    product_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 1000]
      }
    }
  });

  inventory.associate = function (models) {
    // Associating rentals with inventory
    inventory.belongsTo(models.rentals, {
    });
  };

  return inventory;
};