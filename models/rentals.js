module.exports = function(sequelize, DataTypes) {
  var Rentals = sequelize.define("Rentals", {
    rental_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
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
    rental_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    rental_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    rental_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
  });

  Rentals.associate = function(models) {
    // Associating clients with rentals
    Rentals.hasMany(models.Clients, {});
  };

  Rentals.associate = function(models) {
    // Associating inventory with rentals
    Rentals.hasMany(models.Inventory, {});
  };


  return Rentals;
};
